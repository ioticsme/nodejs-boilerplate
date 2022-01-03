const sequelize = require('../db/dbconnection')

const home = async (req, res) => {
    res.status(200).json('Public Route')
}


module.exports = {
    home
}