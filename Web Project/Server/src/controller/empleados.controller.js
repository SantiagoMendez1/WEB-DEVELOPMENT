
const Empleados = require('../models/Empleados');
const empleadoscontrol = {};

empleadoscontrol.getEmpleados = async (req, res, next) => {
    const empleados = await Empleados.find()
    res.json(empleados)
}
empleadoscontrol.createEmpleados = async (req, res, next) => {
    const newEmpleados = new Empleados({
        name: req.body.name,
        apellido: req.body.apellido,
        td: req.body.td,
        documento: req.body.documento,
        ciudad: req.body.ciudad,
        birthday: req.body.birthday,
        email: req.body.email,
        telefono: req.body.telefono,
        usuario: req.body.usuario,
        password: req.body.password,
    });
    
    await newEmpleados.save();

    res.json({status: 'Empleado creado'});
}
empleadoscontrol.getEmpleado = async (req, res, next) => {
    const { id } = req.params;
    const empleado = await Empleados.findById(id);
    res.json(empleado);
}
empleadoscontrol.editEmpleados = async (req, res, next) => {
    const { id } = req.params;
    await Empleados.findByIdAndUpdate(id,  {$set: req.body}, {new: true});
    res.json({status:'Empleado actualizado'})
}

empleadoscontrol.deleteEmpleados = async (req, res) => {
    await Empleados.findByIdAndDelete(req.params.id)
    res.json({status: 'Empleado eliminado'})
}

module.exports = empleadoscontrol;