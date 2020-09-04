const express = require('express')

const app = express()
const path = require('path')

app.get('/', function(req,res){
    res.json("hello tat ca moi nguoi nhe ")
})

app.get('/home', function(req,res){
    var duongDanFile = path.join(__dirname, "home.html")
    res.sendFile(duongDanFile)
})

app.listen(process.env.PORT, function(){
    
})