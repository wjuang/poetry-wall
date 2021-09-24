const express = require('express')
const app = express()

//dotenv setup
require('dotenv').config()
const port = process.env.port

//set up public folder (css)
app.use(express.static('public'))

//set up body parser
app.use(express.urlencoded({extended: false}))

//set up method override
const methodOverride = require('method-override')
app.use(methodOverride('_method'))

//controllers call
const poetryController = require('./controllers/poetryController.js')
app.use('/poems', poetryController)

app.listen(port, () => {
  console.log('app is running on port ' + port)
})
