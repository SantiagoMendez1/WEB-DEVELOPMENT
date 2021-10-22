const pool = require('../database/db');
<<<<<<< HEAD

=======
/*
>>>>>>> parent of 5452baa... sss
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
<<<<<<< HEAD
    //console.log(names);
    conexion.query('INSTER INTO names SET ?',{names:names},{ape:ape},{tipodoc:tipodoc},{doc:doc},{ciudades:ciudades},{fecha:fecha},{mail:mail},{tel:tel},{user:user},{pass:pass},(error,results)=>{
=======
    console.log(names+' - '+ape);
    pool.query('INSTER INTO persona SET ?',{nombres:names,apellidos:ape,idtipodocumento:tipodoc,documento:doc,ciudad:ciudades,fechanacimiento:fecha,email:mail,telefono:tel,usuario:user,contrasena:pass},(error,results)=>{
>>>>>>> parent of 5452baa... sss
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    })
<<<<<<< HEAD
};
=======
}; */
module.exports = {
    async insertar(names,ape,tipodoc,doc,ciudades,fecha,mail,tel,user,pass) {
        let resultados = await pool.query(`insert into persona 
        (nombres,apellidos,idtipodocumento,documento,ciudad,fechanacimiento,email,telefono,usuario,contrasena)
        values
        ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`, [names,ape,tipodoc,doc,ciudades,fecha,mail,tel,user,pass]);
        return resultados;
    },
    async obtener() {
        const resultados = await conexion.query("select id, nombre, precio from productos");
        return resultados.rows;
    },
    async obtenerPorId(id) {
        const resultados = await conexion.query(`select id, nombre, precio from productos where id = $1`, [id]);
        return resultados.rows[0];
    },
    async actualizar(id, nombre, precio) {
        const resultados = conexion.query(`update productos
        set nombre = $1,
        precio = $2
        where id = $3`, [nombre, precio, id]);
        return resultados;
    },
    async eliminar(id) {
        const resultados = conexion.query(`delete from persona
        where id = $1`, [id]);
        return resultados;
    },
}
>>>>>>> parent of 5452baa... sss
