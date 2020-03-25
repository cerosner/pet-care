const assert = require('assert')
const Owner = require('../models/owner')
const { client } = require('../../seed')

let data = {}

describe('Removing records', function () {
  beforeEach(function (done) {
    data = new Owner(client)
    data.save().then(() => done())
  })

  it('should delete a record from the database', function (done) {
    let req = {
      name: { first: 'Charlotte' }
    }

    Owner.findOneAndDelete(data.req).then(function () {
      Owner.findOne(data.req).then(function (res) {
        assert(res === null)
        done()
      })
    })
  })
})
