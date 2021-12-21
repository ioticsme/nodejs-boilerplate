const express = require('express')
const routes = express.Router()

// Importing controllers
const publicController = require('../controllers/public.controller')

routes.get('/health', publicController.health)

module.exports = routes