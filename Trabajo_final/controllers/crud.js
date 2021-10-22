const pool = require('../database/db');

exports.save = (req,res)=>{
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
    //console.log(names);
    conexion.query('INSTER INTO names SET ?',{names:names},{ape:ape},{tipodoc:tipodoc},{doc:doc},{ciudades:ciudades},{fecha:fecha},{mail:mail},{tel:tel},{user:user},{pass:pass},(error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    })
};