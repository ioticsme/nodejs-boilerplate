const express = require('express')
const app = express()
require('dotenv').config()

const sequelize = require('./db/dbconnection')

// General Middlewares
app.use(express.json({ limit: '10mb', type: 'application/vnd.api+json' }))
app.use(express.urlencoded({ limit: '10mb', extended: true }))
app.all('*', function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Max-Age", "3600");
    res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, x-access-token");
    next();
});

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