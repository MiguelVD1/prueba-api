const { urlencoded } = require('express');
const express = require('express');// declaramos a express y lo gaurdamos en una variable
const app = express();// iniciamos a express y lo guardamos en una varible 
const  morgan=require('morgan');//declaramos que necesitamos a morgan y lo guardamos en una variable morgan es el midleware

//declaramos el puerto
const puerto=3000;

//configuraicones 
// establecemos el puerto o  process le decimos que si existe un puerto definido lo tome
app.set('port',process.env.PORT || puerto);
app.set('json spaces',2);


//midlewares
app.use(morgan('dev'));// hacemos uso de morgan y le pasamos el formato dev o combined
app.use(express.urlencoded({extended:false}));// entender datos sencillos que llegan desde un formulario
app.use(express.json());//para entender formatos json

// guardamos en una constante para pasarle donde se van agurpar las rutas 
const agrup='/api';


//rutas
// le decimos que utlize las rutas que estan en este archivo
app.use(require('./routes/index.js'));
app.use(agrup,require('./routes/tickets.js'));
//app.use(agrup,require('./routes/consumo.js'));


// le decimos que va estar a la escuccha en en le puerto 3000 y que mande un mensaje por consola y le mandamos el puerto que seteamos o establecimos 
app.listen(app.get('port'), ()=>{
     console.log(`Server en el puerto ${app.get('port')}`);
    });





