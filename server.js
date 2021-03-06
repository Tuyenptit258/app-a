const express = require('express')
  const app = express()
  const bcrypt = require('bcrypt')
  const passport = require('passport')
  var port     = process.env.PORT || 8500;
  const methodOverride = require('method-override')
  //app.set('view-engine', 'ejs')
  const initializePassport = require('./passport-config')
  initializePassport(
    passport,
    email => users.find(user => user.email === email),
    id => users.find(user => user.id === id)
  )
  
  const users = []
  
  app.set('view-engine', 'ejs')
  app.use(express.urlencoded({ extended: false }))
  
  app.use(passport.initialize())
  
 app.use(methodOverride('_method'))
  
  app.get('/',  (req, res) => {
    res.render('home.ejs')
  })
  
  app.get('/login',  (req, res) => {
    res.render('login.ejs')
  })
  
  app.post('/login',passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  }))
  
  app.get('/register',  (req, res) => {
    res.render('register.ejs')
  })
  
  app.post('/register',  async (req, res) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10)
      users.push({
        id: Date.now().toString(),
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
      })
      res.redirect('/login')
    } catch {
      res.redirect('/register')
    }
    console.log(users)
  })
  
app.delete('/logout',(req,res)=>{
    req.logOut()
    res.redirect('/login')
})

  function checkAuthenticated(req,res,next){
        if(req.isAuthenticated()){
            return next;
        }
        res.redirect('/login')
  }


app.set('view-engine', 'ejs')
  app.get('/',(req,res)=>{
      res.render('home.ejs')
  })
  
  app.listen(process.env.PORT,function(){
      console.log(users)
  })