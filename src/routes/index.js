const {Router}=require('express');// definimos que desde express necesitamos Router que nos permite definir las rutas 
const router=Router();// le decimos que se ejecute y que lo tenga en una constante router


router.get('/',(req,res) => {
    // guardamos el json en una variable y despues se la pasamos a la respuesta 
    const data =({"Title":"inicio"});
     res.json(data);
 });

 module.exports=router;// exportamos las rutas