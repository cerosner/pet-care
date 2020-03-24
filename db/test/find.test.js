const assert = require('assert')
const Owner = require('../models/owner')
const { clients } = require('../../seed')

let data = {}

describe('Finding records', function () {
  beforeEach(function (done) {
    data = new Owner(clients)
    data.save().then(() => done())
  })

  it('should find a record from the database', function (done) {
    let req = { firstName: 'Charlotte' }

    Owner.findOne(req).then(function (res) {
      assert(res.firstName === req.firstName)
      done()
    })
  })

  it('should find a record by ID', function (done) {
    Owner.findById(data._id).then(function (res) {
      // Unable to assess _id as an Object
      assert(res._id.toString() === data._id.toString())
      done()
    })
  })
})
