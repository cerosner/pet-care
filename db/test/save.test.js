const assert = require('assert')
const Owner = require('../models/owner')
const { clients }  = require('../../seed')

let data = new Owner(clients)

describe('Saving records', function () {
  it('should save a record to the database', function (done) {
    data.save().then(function () {
      assert(data.isNew === false)
      done()
    })
  })
})
