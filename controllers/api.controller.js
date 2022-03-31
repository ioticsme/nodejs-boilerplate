const sequelize = require('../db/dbconnection')

const home = async (req, res) => {
    res.status(200).json('API Public Route')
}


module.exports = {
    home
}