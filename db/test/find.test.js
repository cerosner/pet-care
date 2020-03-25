const assert = require('assert')
const Owner = require('../models/owner')
const { client } = require('../../seed')

let data = {}

describe('Finding records', function () {
  beforeEach(function (done) {
    data = new Owner(client)
    data.save().then(() => done())
  })

  it('should find a record from the database', function (done) {
    let req = {
      name: { first: 'Charlotte' }
    }

    Owner.findOne(data.req).then(function (res) {
      assert(res.name.first === req.name.first)
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
