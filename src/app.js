const express = require('express')  
const app = express()
const port = process.env.PORT || 4000 
//  Node path module to generate the absolute path
const path = require('path')
const publicDirectorPath = path.join(__dirname,'../public');
app.use(express.static(publicDirectorPath))

const hbs = require('hbs')

// Dynamic Pages with Templating with Handlebars
app.set('view engine','hbs')

const viewsPath = path.join(__dirname, '../templates/views')
app.set('views', viewsPath)

const apidata = require('./tools/NewsAPIData')  ;

app.get('/index',(req,res)=>{
  apidata((error,data)=>{
    if(error){
      return res.send({error})
    }
    else {
      res.render('index',{
        Data: data      
    })
  }
  })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })