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
    console.log(names);
};