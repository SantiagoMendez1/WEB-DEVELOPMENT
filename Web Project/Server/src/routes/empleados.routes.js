const { Router } = require('express')
const router = Router()

const empleadoscontrol = require('../controller/empleados.controller')

router.get('/', empleadoscontrol.getEmpleados);
router.post('/', empleadoscontrol.createEmpleados);
router.get('/:id', empleadoscontrol.getEmpleado);
router.put('/:id', empleadoscontrol.editEmpleados);
router.delete('/:id', empleadoscontrol.deleteEmpleados);

module.exports = router 