const express = require('express')
const router = express.Router()
const Poem = require('../models/poems.js')


router.get('/', (req, res) => {
  Poem.find({}, (err, poems) => {
  res.render('index.ejs', {
    poems: poems
    })
  })
})

router.get('/seed', (req, res) => {
  const newPoems = [
    {
      title: "The Road Not Taken",
      author: "Robert Frost",
      content: "Two roads diverged in a yellow wood,\
                And sorry I could not travel both\
                And be one traveler, long I stood\
                And looked down one as far as I could\
                To where it bent in the undergrowth;\
                \
                Then took the other, as just as fair,\
                And having perhaps the better claim,\
                Because it was grassy and wanted wear;\
                Though as for that the passing there\
                Had worn them really about the same,\
                \
                And both that morning equally lay\
                In leaves no step had trodden black.\
                Oh, I kept the first for another day!\
                Yet knowing how way leads on to way,\
                I doubted if I should ever come back.\
                \
                I shall be telling this with a sigh\
                Somewhere ages and ages hence:\
                Two roads diverged in a wood, and I—\
                I took the one less traveled by,\
                And that has made all the difference."
    },
    {
      title: "Eightfold Fence",
      content: "Eightfold rising clouds\
                build an eightfold fence\
                an eightfold Izumo fence\
                wherein to keep my bride—\
                oh! splendid eightfold fence."
    }
  ]
  const seedItems = Poem.create(newPoems)
  res.redirect('/poems')
})

module.exports = router
