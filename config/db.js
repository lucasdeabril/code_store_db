const Sequelize = require('sequelize')

// const sequelize = new Sequelize( 'principal' , 'root' , 'l08p04s2000' , {
//     host: 'localhost' ,
//     dialect: 'mysql'
// });

// sequelize.authenticate()
// .then(() => {
//     console.log('Conexão bem sucedida')
// }).catch(() => {
//     console.log("ERRO");
// });

// sequelize.query("UPDATE users SET name = 'lucas_novo' WHERE id = 1")
//   .then(([result, metadata]) => {
//     console.log('Usuário editado com sucesso!');
//     console.log('Resultado:', result);

//     // Consulta separada para obter o registro atualizado
//     return sequelize.query("SELECT * FROM users WHERE id = 1");
//   })
//   .then(([results, metadata]) => {
//     console.log('Registro atualizado:', results[0]);
//   })
//   .catch((error) => {
//     console.log('ERRO:', error);
//   });


// module.exports = sequelize;
