const express = require('express')

const app = express()
const path = require('path')
const bcrypt = require('bcrypt')


const users = []
app.set('view-engine','ejs') 
app.use(express.urlencoded({ extended: false}))
app.get('/', (req,res)=>{
    //res.json("hello tat ca moi nguoi nhe ")
    //var duongDanFile = path.join(__dirname, "home.html")
    //res.sendFile(duongDanFile)
    res.render('home.ejs')
})

app.get('/login', function(req,res){
    res.render('login.ejs')
})

app.post('/login',(req,res)=>{

})

app.get('/register', function(req,res){
    res.render('register.ejs')
})

app.post('/register', async (req,res)=>{
    try {
        const hashedPassword = await bcrypt.hash(req.body.password,10)
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })
        res.redirect('/login')
    } catch  {
        res.redirect('/register')
    }
    console.log(users)
})
app.listen(process.env.PORT, function(){
    
})