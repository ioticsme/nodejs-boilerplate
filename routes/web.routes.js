const express = require('express')
const routes = express.Router()

// Importing controllers
const publicController = require('../controllers/public.controller')

routes.get('/', publicController.home)
routes.get('/about', publicController.about)

module.exports = routes