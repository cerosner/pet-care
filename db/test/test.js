const assert = require('assert')
const Owner = require('../models/owner')

describe('Saving records', function () {
  it('should save a record to the database', function (done) {
    let owner = new Owner({
      firstName: 'Charlotte',
      lastName: 'Azaceta',
      petName: 'Brody'
    })

    owner.save().then(function () {
      assert(owner.isNew === false)
      done()
    })
  })
})
