const express = require('express');
const router = express.Router();

const pool = require('./database/db');

router.get('/',(req,res)=>{
    pool.query('select p.id,p.nombres,p.apellidos,p.idtipodocumento,p.documento,p.ciudad,p.fechanacimiento,p.email,p.telefono,p.usuario,p.contrasena, t.nombre  from persona p, tipodocumento t where p.idtipodocumento=t.id;',(error,results)=>{
        if(error){
            throw error;
        }else{
            console.log(results.rows);
            res.render('index', data={results:results.rows});
            //res.send(results.rows);
        }
    })
});

//router.get('/create',(req,res)=>{
//res.render('create');
//})

router.get('/edit',(req,res)=>{
    const id = req.params.ed;
    conexion.query('SELECT * FROM names WHERE id=? '(error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('edit',names:results[0])
        }
    })
});

router.get('/delete/:id',(req,res)=>{
    const id =req.params.id;
    conexion.query('DELETE FROM NAMES WHERE id=?',[id],(error, results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/');
        }
    })
})

const crud = require('./controllers/crud');
router.post('/save',crud.save);

module.exports= router;