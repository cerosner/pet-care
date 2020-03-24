const assert = require('assert')
const Owner = require('../models/owner')
const { clients } = require('../../seed')

let data = {}

describe('Updating records', function () {
  beforeEach(function (done) {
    data = new Owner(clients)
    data.save().then(() => done())
  })

  it('should update a record in the database', function (done) {
    let req = { firstName: 'Charlie' }

    Owner.findOneAndUpdate(data.firstName, req).then(function () {
      Owner.findById(data._id).then(function (res) {
        assert(res.firstName === req.firstName)
        done()
      })
    })
  })
})
