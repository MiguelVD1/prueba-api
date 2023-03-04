const { Router } = require('express');
const express= require('express');
const { isEqual } = require('underscore');
const router=Router();
const underscore = require('underscore'); // le decimos que requerimos de underscore y lo guardamos en una variable 

const tictkets =require('../samples.json');


//para visulizar
router.get('/tickets',(req,res)=>{
    //res.send('ticket');
    res.json(tictkets);
});

//agregar
router.post('/tickets',(req,res)=>{	
   //guardamos los datos que llegan en req.body 
   const evento=req.body;
   const estado=req.body;
   const fecha=req.body;
   //comprovamos que existan datos
   if(evento && estado && fecha){
    const id=tictkets.length+1;// le asigamos un id incremenmtal
    const newticket ={id,...req.body}
    console.log(req.body);//vemos los dtaos recividos por consola
    console.log(newticket);//vemos todo el nuevo ticket a guardar 
    tictkets.push(newticket);//guradamos en el arreglo
    //res.json('Guardado');
    res.json(newticket);
   }else{
    //res.send('algo salio mal');
    //le enviamos uns estado y un mensaje que hubo un error
    res.status(500).json({error :'hubo un error'});
   }  
});

//eliminar
router.delete('/tickets:id',(req,res)=>{
    //guardamos el id qu estamos recibiendo
    const id = req.params;
    /*mandamos a recorrer el arreglo y le decimos que recibir 
    una pelicula y un indice
    */
    underscore.each(tictkets,(ticket,i)=>{
        //le decimos que si el id es igual va eliminar con splice 
        //ese ticket con el indice para saber ne que posicion se encuentra
        if(ticket.id== id){
            tictkets.slice(i,1);
        }

    });
    
    res.send(tictkets);
});

//actulilzar un dato
router.put('/tickets/:id',(req,res)=>{
try{
    // obtenemos el id que se desea encontrar
    const id1 = req.params.id;
    //obtenemos los datos que quiero actulizar
   const evento=req.body;
   const estado=req.body;
   const fecha=req.body;
    if(evento && estado && fecha){
       tictkets.forEach(function(elemnt){
            if(elemnt.id == id1){
               elemnt.evento=evento;
            }
        });
        res.json(tictkets);
    }else{
        res.status(500).json({error:"hubo un error  la actulizacion"});
    }
}catch(err){
        res.status(500).json({error:"hubo un error"});
    }
    

});


module.exports=router;