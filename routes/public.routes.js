const express = require('express')
const routes = express.Router()

// Importing controllers
const publicController = require('../controllers/public.controller')

routes.get('/home', publicController.home)

module.exports = routes