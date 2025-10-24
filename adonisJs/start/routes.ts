/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
// import { middleware } from './kernel.js'

// Rute untuk halaman utama
router.get('/', async ({ view }) => {
  return view.render('pages/index')
})

// Rute untuk halaman produk
router.get('/produk', async ({ view }) => {
  return view.render('pages/produk')
})

// Rute untuk halaman order
router.get('/order', async ({ view }) => {
  return view.render('pages/order')
})

// Rute untuk halaman login
router.get('/login', async ({ view }) => {
  return view.render('pages/login')
})

// Rute untuk halaman tambah item
router.get('/add-item', async ({ view }) => {
  return view.render('pages/addItem')
})
