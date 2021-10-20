const express = require('express');
const router = express.Router();

const pool = require('./database/db');

router.get('/tipo', async(req,res)=>{
    const response = await pool.query('SELECT * FROM tipodocumento');
    console.log(response.rows);
    res.send(response.rows);
})

module.exports= router;