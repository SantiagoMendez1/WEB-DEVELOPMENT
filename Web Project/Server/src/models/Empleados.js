const {Schema, model} = require('mongoose')

const empleadosSchema= new Schema(
    {
    name: {type: String, required: true},
    apellido: {type: String, required: true},
    td: {type: String, required: true},
    documento: {type: Number, required: true},
    ciudad: {type: String, required: true},
    birthday: {type: Date, required: true},
    email: {type: String, required: true},
    telefono: {type: Number, required: true},
    usuario: {type: String, required: true},
    password: {type: String, required: true},

    },
    {
    timestamps: true,
    versionKey: false,
    }
)

module.exports = model("Empleados", empleadosSchema);