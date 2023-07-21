const Sequelize = require('sequelize')
const db = require('./db')
//db.define('users' ,

const user =  {
    
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
    senha:{
        type: Sequelize.STRING,
        allowNull: false
    },
    saldo:{
        type: Sequelize.STRING,
        allowNull: false
    },
    historico:{
        type: Sequelize.STRING,
        allowNull: true
    },
    favoritos:{
        type: Sequelize.STRING,
        allowNull: true
    }
};

user.sync();

module.exports = user;