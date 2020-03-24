const assert = require('assert')
const Owner = require('../models/owner')
const { clients } = require('../../seed')

let data = {}

describe('Removing records', function () {
  beforeEach(function (done) {
    data = new Owner(clients)
    data.save().then(() => done())
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
