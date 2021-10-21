const { Pool } = require('pg');

const pool = new Pool({
    host: 'fanny.db.elephantsql.com',
    user:'sottqajy',
    password: 'qTZDJp6gX8DT-ll78hBk54R7HmMpGNn1',
    database: 'sottqajy',
    port: '5432'
})

pool.query('SELECT NOW()', (err, res) => {
    //console.log(err, res)
    //pool.end()
    if(err){
        console.error('El error de conexión es: '+err);
        return
    }
    console.log('Conectado a la base de datos POSTGRESQL');
})
/*
const client = new Client({
    host: 'fanny.db.elephantsql.com',
    user:'sottqajy',
    password: 'qTZDJp6gX8DT-ll78hBk54R7HmMpGNn1',
    database: 'sottqajy',
    port: '5432'
})
client.connect()

client.query('SELECT NOW()', (err, res) => {
    //console.log(err, res)
    //client.end()
    if(err){
        console.error('El error de conexión es: '+err);
        return
    }
    console.log('Conectado a la base de datos POSTGRESQL');
})
module.exports=client;  */
module.exports=pool;