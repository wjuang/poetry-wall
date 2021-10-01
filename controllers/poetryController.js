const express = require('express')
const router = express.Router()
const Poem = require('../models/poems.js')
const Comment = require('../models/comments.js')

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
      content: "Two roads diverged in a yellow wood,\r\n\
And sorry I could not travel both\r\n\
And be one traveler, long I stood\r\n\
And looked down one as far as I could\r\n\
To where it bent in the undergrowth\r\n\
\r\n\
Then took the other, as just as fair\r\n\
And having perhaps the better claim\r\n\
Because it was grassy and wanted wear\r\n\
Though as for that the passing there\r\n\
Had worn them really about the same\r\n\
\r\n\
And both that morning equally lay\r\n\
In leaves no step had trodden black\r\n\
Oh, I kept the first for another day\r\n\
Yet knowing how way leads on to way\r\n\
I doubted if I should ever come back\r\n\
\r\n\
I shall be telling this with a sigh\r\n\
Somewhere ages and ages hence:\r\n\
Two roads diverged in a wood, and I—\r\n\
I took the one less traveled by,\r\n\
And that has made all the difference."
    },
    {
      title: "Eightfold Fence",
      content: "Eightfold rising clouds\r\n\
build an eightfold fence\r\n\
an eightfold Izumo fence\r\n\
wherein to keep my bride—\r\n\
oh! splendid eightfold fence."
    }
  ]
  const seedItems = Poem.create(newPoems)
  res.redirect('/poems')
})

router.get('/new', (req, res) => {
  res.render('new.ejs')
})

router.post('/', (req, res) => {
  if (req.body.author.length < 1){
    delete req.body.author
  }
  const bodySplit = req.body.content.split("/\n/g")
  req.body.content = bodySplit.join('<br/>')
  Poem.create(req.body, (err, newPoem) => {
    if (err) {
      console.log(err)
      res.send(err)
    } else {
      res.redirect('/poems')
    }
  })
})

//comments route
router.post('/:id', (req, res) => {
  req.body.pageId = req.params.id
  if (req.body.author.length < 1) {
    delete req.body.author
  }
  Comment.create(req.body, (err, newComment) => {
    if (err) {
      console.log(err)
      res.send(err)
    } else {
      res.redirect('/poems/' + req.params.id)
    }
  })
})

router.get('/:id/edit', (req, res) => {
  Poem.findById(req.params.id, (err, foundPoem) => {
    if (err) {
      console.log(err)
      res.send(err)
    } else {
      res.render('edit.ejs', {
        poem: foundPoem
      })
    }
  })
})

router.put('/:id', (req, res) => {
  if (req.body.author.length < 1){
    req.body.author = "Anonymous"
  }
  req.body.edit = "(edited)"
  Poem.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, foundPoem) => {
    if (err) {
      console.log(err)
      res.send(err)
    } else {
      res.redirect("/poems/" + req.params.id)
    }
  })
})

//comments delete
router.delete('/:id/:id2', (req, res) => {
  Comment.findByIdAndDelete(req.params.id2, (err, deletedComment) => {
    if (err) {
      console.log(err)
      res.send(err)
    } else {
      res.redirect('/poems/' + req.params.id)
    }
  })
})

router.delete('/:id', (req, res) => {
  Poem.findByIdAndDelete(req.params.id, (err, deletedPoem) => {
    if (err){
      console.log(err)
      res.send(err)
    } else {
      res.redirect('/poems')
    }
  })
})

router.get('/:id', (req, res) => {
  Poem.findById(req.params.id, (err, poem) => {
    if (err){
      console.log(err)
      res.send(err)
    } else {
      Comment.find({}, (err, comments) => {
        if (err){
          console.log(err)
          res.send(err)
        } else {
          res.render('show.ejs', {
            poem: poem,
            comments: comments
          })
        }
      })
    }
  })
})


module.exports = router
