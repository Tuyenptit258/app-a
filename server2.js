const express = require('express')

const app = express()

app.get('/', function(req,res){
    res.json("hello tat ca moi nguoi nhe ")
})

app.listen(process.env.PORT, function(){
    
})