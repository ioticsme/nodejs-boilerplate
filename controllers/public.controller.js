const sequelize = require('../db/dbconnection')

const home = async (req, res) => {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
}
const about = async (req, res) => {
    res.render('about', { title: 'Hey', message: 'Hello there!' })
}


module.exports = {
    home,
    about,
}