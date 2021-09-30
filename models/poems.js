const mongoose = require('mongoose')

const poemSchema = new mongoose.Schema({
  title: {type: String, required: true},
  author: {type: String, default: 'Anonymous'},
  content: {type: String, required: true},
  time: {type: Date, default: Date.now},
  writeConcern: {
    w: 'majority',
    j: true,
    wtimeout: 1000;
  }
})

module.exports = mongoose.model('Poems', poemSchema)
