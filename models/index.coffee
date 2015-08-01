mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/wtc')

exports.Snippet = require('./snippet.coffee')(mongoose)
