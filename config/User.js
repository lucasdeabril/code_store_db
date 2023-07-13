const Sequelize = require('sequelize')
const db = require('./db')

const user = db.define('users' , {
    
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false
    },
    saldo:{
        type: Sequelize.STRING,
        allowNull: false
    }
});

user.sync();

module.exports = user;