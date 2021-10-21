const express = require('express');
const router = express.Router();

const pool = require('./database/db');

router.get('/',(req,res)=>{
    pool.query('select p.id,p.nombres,p.apellidos,p.idtipodocumento,p.documento,p.ciudad,p.fechanacimiento,p.email,p.telefono,p.usuario,p.contrasena, t.nombre  from persona p, tipodocumento t where p.idtipodocumento=t.id;',(error,results)=>{
        if(error){
            throw error;
        }else{
            console.log(results.rows);
            res.render('index.ejs', data={results:results.rows});
            //res.send(results.rows);
        }
    })
})

module.exports= router;