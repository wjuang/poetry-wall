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

app.get('/', (req, res) => {
  res.render('index.ejs')
})

app.listen(port, () => {
  console.log('app is running on port ' + port)
})
