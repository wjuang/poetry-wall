const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  author: {type: String, default: 'Anonymous'},
  comment: {type: String, required: true},
  time: {type: Date, default: Date.now},
  pageId: {type: String},
  writeConcern: {
    w: 'majority',
    j: true,
    wtimeout: 1000;
  }
})

module.exports = mongoose.model('Comments', commentSchema)
