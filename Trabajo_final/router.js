const express = require('express');
const router = express.Router();

const pool = require('./database/db');

router.get('/',(req,res)=>{
    pool.query('SELECT * FROM tipodocumento',(error,results)=>{
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