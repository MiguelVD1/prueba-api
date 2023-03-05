const {Router}=require('express');
const router=Router();

//le dices que quieres importar el modulo de node-fetch que nos ayuda
//aser get de una api existente para que sea consumida
const fetch=require('node-fetch');

//creamos un metodo get para hacer el consumo de nuestra rest api
router.get('/consumo', async(req,res)=>{
    const respuesta=await fetch('https://jsonplaceholder.typicode.com/users');
    const consumos= await respuesta.json();//transformas los strings o json
    res.json(consumos);
    //res.send('consumiendo');
});

module.exports=router;