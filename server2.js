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
    res.render('login.ejs')
})
app.get('/register', function(req,res){
    res.render('register.ejs')
})

app.listen(process.env.PORT, function(){
    
})