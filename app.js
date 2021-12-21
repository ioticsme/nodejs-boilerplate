const express = require('express')
const app = express()
require('dotenv').config()

// Importing Route file
const publicRoutes = require('./routes/public.routes')

// Pointing routes
app.use('/', publicRoutes)

// Starting Server
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server running on ${port}`)
})