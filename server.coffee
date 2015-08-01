#!/usr/bin/env coffee

express = require('express')
app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('accelerator').createEngine())
app.use(express.static('public'))
app.use(require('body-parser').json())
app.use(require('morgan')('combined'))

require('./routes')(app)

server = app.listen(8097, '0.0.0.0', () ->
   host = server.address().address
   port = server.address().port

   console.log('What the Code is listening at http://%s:%s', host, port)
)
