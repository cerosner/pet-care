const assert = require('assert')
const data = require('../../seed')
const Owner = require('../models/owner')

let newOwner = new Owner(data.Owners)

describe('Finding records', function () {

  beforeEach(function (done) {
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
})
