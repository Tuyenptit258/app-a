const express = require('express')

const app = express()
const path = require('path')
app.set('view-engine','ejs') 

app.get('/', (req,res)=>{
    //res.json("hello tat ca moi nguoi nhe ")
    //var duongDanFile = path.join(__dirname, "home.html")
    //res.sendFile(duongDanFile)
    res.render('home.ejs')
})

app.get('/login', function(req,res){
    var duongDanFile1 = path.join(__dirname, "login.html")
    res.sendFile(duongDanFile1)
})
app.get('/register', function(req,res){
    var duongDanFile2 = path.join(__dirname, "register.html")
    res.sendFile(duongDanFile2)
})

app.listen(process.env.PORT, function(){
    
})