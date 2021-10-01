const mongoose = require('mongoose')

const poemSchema = new mongoose.Schema({
  title: {type: String, required: true},
  author: {type: String, default: 'Anonymous'},
  content: {type: String, required: true},
  time: {type: Date, default: Date.now},
  edit: {type: String}
})

module.exports = mongoose.model('Poems', poemSchema)
