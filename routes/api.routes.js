const express = require('express')
const routes = express.Router()

// Importing controllers
const apiController = require('../controllers/api.controller')

routes.get('/', apiController.home)

module.exports = routes