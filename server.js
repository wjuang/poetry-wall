const express = require('express')
const app = express()
const mongoose = require('mongoose')

//schema import
const Poem = require('./models/poems.js')
const Comment = require('./models/comments.js')

//dotenv setup
require('dotenv').config()
const PORT = process.env.PORT

//set up public folder (css)
app.use(express.static('public'))

//set up body parser
app.use(express.urlencoded({extended: false}))

//set up method override
const methodOverride = require('method-override')
app.use(methodOverride('_method'))

//dtabase connection
const mongoURI = process.env.MONGODB_URI

const db = mongoose.connection

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => {
    console.log('database connected')
})
//database optionals
db.on('error', (err) => {
  console.log('ERROR:', err)
})
db.on('connected', () => {
  console.log('mongo connected')
})
db.on('disconnected', () => {
  console.log('mongo disconnected')
})

//controllers call
const poetryController = require('./controllers/poetryController.js')
app.use('/poems', poetryController)

//redirect to main page
app.get('/', (req, res) => {
  res.redirect('/poems')
})

app.listen(PORT, () => {
  console.log('app is running on port ' + PORT)
})
