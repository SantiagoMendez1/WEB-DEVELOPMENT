const express = require('express');
const router = express.Router();

const pool = require('./database/db');

router.get('/',(req,res)=>{
<<<<<<< HEAD
    pool.query('select p.id,p.nombres,p.apellidos,p.idtipodocumento,p.documento,p.ciudad,p.fechanacimiento,p.email,p.telefono,p.usuario,p.contrasena, t.nombre  from persona p, tipodocumento t where p.idtipodocumento=t.id;',(error,results)=>{
=======
    pool.query('select p.id,p.nombres,p.apellidos,t.nombre ,p.documento,c.nombre,p.fechanacimiento,p.email,p.telefono,p.usuario,p.contrasena  from persona p, tipodocumento t, ciudad c where p.idtipodocumento=t.id and p.ciudad=c.id;',(error,results)=>{
>>>>>>> parent of 5452baa... sss
        if(error){
            throw error;
        }else{
            console.log(results.rows);
            res.render('index', data={results:results.rows});
            //res.send(results.rows);
        }
    })
});

<<<<<<< HEAD
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
=======
router.get('/create',(req,res)=>{
res.render('create');
})

router.get('/edit',(req,res)=>{
    const id = req.params.ed;
    pool.query('SELECT * FROM names WHERE id=? ',(error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('edit',{names:results[0]})
>>>>>>> parent of 5452baa... sss
        }
    })
});

router.get('/delete/:id',(req,res)=>{
    const id =req.params.id;
<<<<<<< HEAD
    conexion.query('DELETE FROM NAMES WHERE id=?',[id],(error, results)=>{
=======
    pool.query('DELETE FROM NAMES WHERE id=?',[id],(error, results)=>{
>>>>>>> parent of 5452baa... sss
        if(error){
            throw error;
        }else{
            res.redirect('/');
        }
    })
})

const crud = require('./controllers/crud');
<<<<<<< HEAD
router.post('/save',crud.save);
=======
//router.post('/save',crud.save);

router.post('/insertar', function (req, res, next) {
    // Obtener el nombre y precio. Es lo mismo que
    // const nombre = req.body.nombre;
    // const precio = req.body.precio;
    const names = req.body.names;
    const ape = req.body.ape;
    const tipodoc = req.body.tipodoc;
    const doc = req.body.doc;
    const ciudades = req.body.ciudades;
    const fecha = req.body.fecha;
    const mail = req.body.mail;
    const tel = req.body.tel;
    const user = req.body.user;
    const pass = req.body.pass;
    //const { nombre, precio } = req.body;
  /*  if (!names || !ape || !tipodoc || !doc || !ciudades || !fecha || !mail || !tel || !user || !pass) {
        return res.status(500).send("Falta algún dato");
    } */
    // Si todo va bien, seguimos
    crud
        .insertar(names,ape,tipodoc,doc,ciudades,fecha,mail,tel,user,pass)
        .then(idProductoInsertado => {
            res.redirect("/");
        })
        .catch(err => {
            return res.status(500).send("Error registro");
        });
});
>>>>>>> parent of 5452baa... sss

module.exports= router;