const mongoose = require('mongoose')

// Connect to mongodb
mongoose.connect('mongodb://localhost/mongodb-test', { useNewUrlParser: true, useUnifiedTopology: true })

mongoose.connection.once('open', function() {
  console.log('Connection successful :)')
}).on('error', function (error) {
  console.log('Connection ERROR:', error)
})
