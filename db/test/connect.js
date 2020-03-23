const mongoose = require('mongoose')
const DB = require('../../package.json').name

mongoose.Promise = global.Promise

// Connect to database before running tests
before(function (done) {
  // Connecting to MongoDb
  mongoose.connect(`mongodb://localhost/${DB}`, { useNewUrlParser: true, useUnifiedTopology: true })

  mongoose.connection.once('open', function () {
    console.log(`>> $ SUCCESS $ Connected to ${DB} database! (:`)

    done()
  }).on('error', function () {
    console.log(`>> ! ERROR ! Connection to ${DB} database failed >>`, error)
  })
})

