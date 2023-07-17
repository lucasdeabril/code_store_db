const express = require('express')
const routes = express.Router()
const User = require('./User')

routes.use(express.json())

let db = [
    { '1': { Nome: 'Cliente 1', Idade: '20' } },
    { '2': { Nome: 'Cliente 2', Idade: '20' } },
    { '3': { Nome: 'Cliente 3', Idade: '20' } }
  ];
  
// buscar dados
routes.get('/', (req, res) => {
return res.json(db);
});

// inserir dados
routes.post('/cadastrar', async (req , res) =>{
  console.log(req.body);

  await User.create(req.body)
  .then(() => {
      return res.json({
        erro : false,
        mensagem : "Usuário cadastrado com sucesso!"
      })
  }).catch(()=>{
    return res.status(400).json({
      erro : true,
      mensagem : "Usuário não cadastrado com sucesso!"
    })
  })

  // res.send('pagina inicial cadastrar');
})

routes.post('/add', (req, res)=>{
    const body = req.body
    if(!body)
    return res.status(400).end()

    db.push(body)
    return res.json(body)
})


routes.put('/edit', (req, res) =>{
  const {id , name} = req.body;
  User.update(
    {name: name},
    {where: {id:id}}
  )
  .then(()=>{
    res.json({success:true, message:'Elemento atualizado com sucesso'})
  })
  .catch((error)=>{
    res.status(500).json({sucess:false, message:'Elemento não atualizado' })
  })
})
  

module.exports = routes