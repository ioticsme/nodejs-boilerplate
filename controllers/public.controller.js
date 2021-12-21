const sequelize = require('../db/dbconnection')

const health = async (req, res) => {
    let dbSuccess = false
    try {
        await sequelize.authenticate()
        dbSuccess = true
    } catch (err) {
        console.log('DB Error')
    }
    res.status(200).json({
        'DB Connection': dbSuccess,
        'App': true
    })
}


module.exports = {
    health
}