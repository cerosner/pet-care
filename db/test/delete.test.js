const assert = require('assert')
const data = require('../../seed')
const Owner = require('../models/owner')

let newOwner = {}

describe('Removing records', function () {
  beforeEach(function (done) {
    newOwner = new Owner(data.Owners)
    newOwner.save().then(() => done())
  })

  it('should delete a record from the database', function (done) {
    let req = { firstName: 'Charlotte' }

    Owner.findOneAndDelete(req).then(function () {
      Owner.findOne(req).then(function (res) {
        assert(res === null)
        done()
      })
    })
  })
})
