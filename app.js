const express = require('express')
const app = express()
require('dotenv').config()

const sequelize = require('./db/dbconnection')

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application health routes
app.get('/health', async (req, res) => {
    let dbSuccess = false
    try {
        await sequelize.authenticate()
        dbSuccess = true
    } catch (error) {
        dbSuccess = false
    }
    res.status(200).json({
        'DB Connected': dbSuccess,
        'Health': 'OK',
    })
})

// Importing Route file
const publicRoutes = require('./routes/public.routes')

// Pointing routes
app.use('/', publicRoutes)

// Starting Server
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server running on ${port}`)
})