#!/usr/bin/env coffee

express = require('express')
app = express()
db = require('monk')('localhost/wtc')
snippets = db.get('snippets')

require('node-jsx').install()

React = require('react')
App = require('./views/app.jsx')

app.set('view engine', 'jsx')
app.engine('jsx', require('accelerator').createEngine())

app.use(express.static('public'))

app.get('/', (req, res) ->
   try
      snippets.find(null, {limit: 5, fields: {_id: 1}}, (err, docs) ->
         res.render('homepage', {
            props: {
               recent: ({id: doc._id.toString(), title: "SNIPPET"} for doc in docs),
               popular: ({id: doc._id.toString(), title: "SNIPPET"} for doc in docs)
            },
            head: App.layout.DefaultLayout.Head,
            post: App.layout.DefaultLayout.Post
         })
      )
   catch
      res.status(300).end()
)

render_snippet = (req, res) ->
   try
      snippets.findById(req.params.snippet_id, (err, doc) ->
         if err or !doc
            res.status(404).end()
            return

         res.render('snippet', {
            props: doc
            head: App.layout.DefaultLayout.Head,
            post: App.layout.DefaultLayout.Post
         })
      )
   catch
      res.status(300).end()

app.get('/:snippet_id', render_snippet)

server = app.listen(8097, '0.0.0.0', () ->
   host = server.address().address
   port = server.address().port

   console.log('What the Code is listening at http://%s:%s', host, port)
)
