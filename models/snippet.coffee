shortid = require('shortid')

module.exports = (mongoose) ->

   return mongoose.model('Snippet', mongoose.Schema({
      _id: {
         type: String,
         unique: true,
         'default': shortid.generate
      },
      title: { type: String, required: true },
      elements: [{
         _id: false,
         code: {
            type: String,
            required: true
         },
         explanation: String
      }]
   }, {strict: "throw"}))

