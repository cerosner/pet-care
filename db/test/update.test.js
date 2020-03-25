const assert = require('assert')
const Owner = require('../models/owner')
const Service = require('../models/service')
const { client, service } = require('../../seed')

let data_1 = {}
let data_2 = {}

describe('Updating records', function () {
  describe('Clients', function () {
    beforeEach(function (done) {
      data_1 = new Owner(client)
      data_1.save().then(() => done())
    })

    it('should update a record in the database', function (done) {
      let req = {
        name: { first: 'Charlie' }
      }

      Owner.findOneAndUpdate(data_1.name.first, req).then(function () {
        Owner.findById(data_1._id).then(function (res) {
          assert(res.name.first === req.name.first)
          done()
        })
      })
    })

  })

  describe('Services', function () {
    beforeEach(function (done) {
      data_2 = new Service(service)
      data_2.save().then(() => done())
    })

    it(`should increment service duration by 1`, function (done) {
      let inc = { $inc: { duration: 1 } }
      let expectedDur = data_2.duration + 1

      Service.findOneAndUpdate(data_2.duration, inc).then(function () {
        Service.findById(data_2._id).then(function (res) {
          assert(res.duration === expectedDur)
          done()
        })
      })
    })
  })
})
