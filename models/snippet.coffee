shortid = require('shortid')

module.exports = (mongoose) ->
   return mongoose.model('Snippet', {
      _id: {
         type: String,
         unique: true,
         'default': shortid.generate
      },
      title: String,
      code: [String],
      explanation: [String]
   })

