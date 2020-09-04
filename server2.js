const express = require('express')

const app = express()
const path = require('path')

app.get('/', function(req,res){
    //res.json("hello tat ca moi nguoi nhe ")
    var duongDanFile = path.join(__dirname, "home.html")
    res.sendFile(duongDanFile)
})

app.get('/login', function(req,res){
    var duongDanFile1 = path.join(__dirname, "login.html")
    res.sendFile(duongDanFile1)
})

app.listen(process.env.PORT, function(){
    
})