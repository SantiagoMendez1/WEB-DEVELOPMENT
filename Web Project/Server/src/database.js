const mongoose = require('mongoose')

mongoose
    .connect('mongodb://localhost/databases',{
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false
    })
    .then((db)=>console.log("Db is conected"))
    
    .catch((err)=> console.error(err));

module.exports = mongoose;