const assert = require('assert')
const Owner = require('../models/owner')
const Service = require('../models/service')
const { client, service }  = require('../../seed')

let data_1 = new Owner(client)
let data_2 = new Service(service)

describe('Saving records', function () {
  it('should save a client record to the database', function (done) {
    data_1.save().then(function () {
      assert(data_1.isNew === false)
      done()
    })
  })

  it('should save a service record to the database', function (done) {
    data_2.save().then(function () {
      assert(data_2.isNew === false)
      done()
    })
  })
})
