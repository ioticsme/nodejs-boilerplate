const express = require('express')
const app = express()
require('dotenv').config()

// DB Connection
const sequelize = require('./db/dbconnection')

// Eloquent Relations
require('./db/associations')

// General Middlewares
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ limit: '10mb', extended: true }))
app.all('*', function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Max-Age", "3600");
    res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, x-access-token");
    next();
});

// Template Engine
app.set('view engine', 'pug')

// Application health routes
app.get('/health', async (req, res) => {
    let dbSuccess = false
    try {
        await sequelize.authenticate()
        dbSuccess = true
    } catch (error) {
        dbSuccess = false
    }

    const appKey = process.env.APP_KEY === undefined ? 'APP Key is missing!!!' : 'Success';
    
    res.status(200).json({
        'DB Connected': dbSuccess,
        'Health': 'OK',
        'App Key': appKey,
    })
})

// Importing Route file
const webRoutes = require('./routes/web.routes')
const apiRoutes = require('./routes/api.routes')

// Pointing routes
app.use('/', webRoutes)
app.use('/api', apiRoutes)

// Starting Server
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server running on ${port}`)
})