require('dotenv').config()
const Sequelize = require('sequelize')
const config = require('./config')

const sequelize = new Sequelize(config[process.env.NODE_ENV]['database'], config[process.env.NODE_ENV]['username'], config[process.env.NODE_ENV]['password'], {
    host: config[process.env.NODE_ENV]['host'],
    port: config[process.env.NODE_ENV]['port'],
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