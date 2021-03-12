var express = require('express');
var router = express.Rourter();

//Aqui van las rutas y metodos
//http://127.0.0.1:3000/campeones/garen
router.get('/', (req,res,next)=>{
  res.send('Bienvenido invocador!!!');
} ); //notacion lambda!!!

router.get('/garen',(req,res,next)=>{
  res.render('campeongaren',{ nombre:'Garen' , pasiva: 'perserverancia' });
});

module.exports = router;
