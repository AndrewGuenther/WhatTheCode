React = require('react')
Snippet = require('./models').Snippet

# TODO Get rid of node-jsx and compile these files.
require('node-jsx').install()
App = require('./views/app.jsx')

module.exports = (app) ->
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
      Snippet.create(req.body, (err) ->
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

