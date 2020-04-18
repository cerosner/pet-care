const assert = require('assert')
const mongoose = require('mongoose')
const DB = require('../../package.json').name
const {
  Client,
  Pet,
  Service
} = require('../models')

before(function (done) {
  mongoose.connect(`mongodb://localhost/${DB}_TEST`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })

  const db = mongoose.connection

  db.once('open', function () {
    console.log(`>> Connected to ${DB}_TEST database! (:`)
    done()
  })

  db.on('error', function () {
    console.log(`! ERROR: db ${DB} connection failed >>`, error)
  })
})

describe('Saving Records', function () {
  let client_data = new Client({ name: 'Cass' })
  let pet_data = new Pet({ name: 'Felix', category: 'cat' })
  let service_data = new Service({ category: 'visit', fee: 0 })

  it('should successfully save records to the database', function (done) {
    client_data.save(() => assert(!client_data.isNew))
    pet_data.save(() => assert(!pet_data.isNew))
    service_data.save(() => assert(!service_data.isNew))
    done()
  })
})

afterEach(function (done) {
  const collections = mongoose.connection.db.collections
  for (let collection in collections) collection.deleteOne()
  done()
})

after(function (done) {
  mongoose.connection.db.dropDatabase(function () {
    mongoose.connection.close(done)
  })
})