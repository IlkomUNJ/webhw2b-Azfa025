document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault()

  const name = document.getElementById('name').value.trim()
  const password = document.getElementById('password').value.trim()

  if (name === '' || password === '') {
    alert('Nama dan kata sandi harus diisi.')
    return
  }

  // Jika valid → arahkan ke halaman utama
  window.location.href = '/'
})
