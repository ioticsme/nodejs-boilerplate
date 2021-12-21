require('dotenv').config()
const Sequelize = require('sequelize')
const config = require('./config')

const sequelize = new Sequelize(config['development'].database, config['development'].username, config['development'].password, {
    host: config['development'].host,
    dialect: 'mysql',
    logging: true,
});

// sequelize
//     .authenticate()
//     .then(() => {
//         console.log('Connection has been established successfully');
//     })
//     .catch(err => {
//         console.error('Unable to connect to the database:', err);
//     });

module.exports = sequelize