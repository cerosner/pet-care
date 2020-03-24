const assert = require('assert')
const data  = require('../../seed')
const Owner = require('../models/owner')

let newOwner = new Owner(data.Owners)

describe('Saving records', function () {
  it('should save a record to the database', function (done) {
    newOwner.save().then(function () {
      assert(newOwner.isNew === false)
      done()
    })
  })
})
