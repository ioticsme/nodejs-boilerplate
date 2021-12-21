const express = require('express')
const app = express()
require('dotenv').config()
const sequelize = require('./db/dbconnection')

app.get('/health', async(req, res) => {
    let dbSuccess = false
    try {
        await sequelize.authenticate()
        dbSuccess = true
    } catch(err) {
        console.log('DB Error')
    }
    res.status(200).json({
        'DB Connection': dbSuccess,
        'App': true
    })
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server running on ${port}`)
})