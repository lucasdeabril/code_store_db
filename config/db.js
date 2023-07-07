const Sequelize = require('sequelize')

const sequelize = new Sequelize( 'principal' , 'root' , 'l08p04s2000' , {
    host: 'localhost' ,
    dialect: 'mysql'
});

sequelize.authenticate()
.then(() => {
    console.log('conexão bem sucedida')
}).catch(() => {
    console.log("ERRO")
})

module.exports = sequelize;