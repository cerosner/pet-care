const assert = require('assert')
const Owner = require('../models/owner')
const { client } = require('../../seed')

let data = new Owner(client)

describe('Nesting records', function () {
  it('should create an owner record with sub-documents', function (done) {
    data.save().then(function () {
      Owner.findOne(data).then(function (res) {
        assert(res.pet.name === client.pet.name)
        done()
      })
    })
  })
})
