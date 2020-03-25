/*
  Change into the `db` directory before
  running `mocha` in the terminal.
*/

const mongoose = require('mongoose')
const DB = require('../../package.json').name

// Uses ES6 Promise Library
mongoose.Promise = global.Promise

// Connects to database
before(function (done) {
  mongoose.connect(`mongodb://localhost/${DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })

  mongoose.connection.once('open', function () {
    console.log(`>> Connected to ${DB} database! (:`)
    done()}).on('error', function () {
    console.log(`! ERROR: db ${DB} connection failed >>`, error)
  })
})

// Deletes dummy data
afterEach(function (done) {
  mongoose.connection.collections.owners.drop(function () {
    mongoose.connection.collections.services.drop(() => done())
  })
})
