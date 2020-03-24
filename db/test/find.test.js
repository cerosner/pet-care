const assert = require('assert')
const data = require('../../seed')
const Owner = require('../models/owner')

let newOwner = {}

describe('Finding records', function () {
  beforeEach(function (done) {
    newOwner = new Owner(data.Owners)

    newOwner.save().then(function () {
      done()
    })
  })

  it('should find a record from the database', function (done) {
    let req = { firstName: 'Charlotte' }

    Owner.findOne(req).then(function (res) {
      assert(res.firstName === 'Charlotte')
      done()
    })
  })

  it('should find a record by ID', function (done) {
    Owner.findById(newOwner._id).then(function (res) {
      // Unable to assess _id as an Object
      assert(res._id.toString() === newOwner._id.toString())
      done()
    })
  })
})
