#!/usr/bin/env coffee

express = require('express')
app = express()
bodyParser = require('body-parser')

shortid = require('shortid')

mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/wtc')

require('node-jsx').install()

React = require('react')
App = require('./views/app.jsx')

Snippet = mongoose.model('Snippet', {
   _id: {
      type: String,
      unique: true,
      'default': shortid.generate
   },
   title: String,
   code: [String],
   explanation: [String]
})

app.set('view engine', 'jsx')
app.engine('jsx', require('accelerator').createEngine())

app.use(express.static('public'))
app.use(bodyParser.json())

app.get('/', (req, res) ->
   Snippet.find({}).limit(5).exec((err, docs) ->
      if err
         console.log(err)
         res.status(400).end()
      res.render('homepage', {
         props: {
            recent: ({id: doc._id.toString(), title: doc.title} for doc in docs),
            popular: ({id: doc._id.toString(), title: doc.title} for doc in docs)
         },
         head: App.layout.DefaultLayout.Head,
         post: App.layout.DefaultLayout.Post
      })
   )
)

app.post('/snippet', (req, res) ->
   Snippet.create({
      title: req.body.title,
      code: req.body.code,
      explanation: req.body.explanation
   }, (err) ->
      if (err)
         console.log(err)
         res.status(400).end()
      else
         res.status(200).end()
   )
)

app.get('/snippet/:snippet_id', (req, res) ->
   Snippet.findById(req.params.snippet_id, (err, snippet) ->
      if err
         console.log(err)
         res.status(404).end()
         return

      res.render('snippet', {
         props: snippet.toObject(),
         head: App.layout.DefaultLayout.Head,
         head_props: {title: snippet.title},
         post: App.layout.DefaultLayout.Post
      })
   )
)

server = app.listen(8097, '0.0.0.0', () ->
   host = server.address().address
   port = server.address().port

   console.log('What the Code is listening at http://%s:%s', host, port)
)
