const mongoose = require('mongoose')
const DB = require('../../package.json').name

// Use ES6 Promise Library
mongoose.Promise = global.Promise

// Connect to database before running tests
before(function (done) {
  // Connecting to MongoDb
  mongoose.connect(`mongodb://localhost/${DB}`, {
    useNewUrlParser: true, useUnifiedTopology: true
  })

  mongoose.connection.once('open', function () {
    console.log(`>> Connected to ${DB} database! (:`)

    done()}).on('error', function () {
    console.log(`! ERROR: db ${DB} connection failed >>`, error)
  })
})

// Delete dummy data before each test
beforeEach(function (done) {
  mongoose.connection.collections.owners.drop(function () {
    done()
  })
})
