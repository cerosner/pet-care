const assert = require('assert')
const mongoose = require('mongoose')
const {
  Client,
  Pet,
  Service
} = require('../models')
const {
  CLIENT,
  PET,
  SERVICE
} = require('../../_seed')

let client_data = new Client(CLIENT)
let pet_data = new Pet(PET)
let service_data = new Service(SERVICE)


describe('Finding Records', function () {
  before(function (done) {
    [ client_data,
      pet_data,
      service_data].forEach(data => data.save())

    done()
  })

  it('should find a record by name', function (done) {
    let client_req = { name: 'Charlotte Azaceta' }
    let pet_req = { name: 'Brody' }
    let service_req = { category: 'walk' }

    Client.findOne(client_req).then(client => {
      assert(client.name === client_req.name)
    })
    Pet.findOne(pet_req).then(pet => {
      assert(pet.name === pet_req.name)
    })

    done()
  })

  it('should find a record by ID', function (done) {
    Client.findById(client_data._id).then(client => {
      assert(client._id.toString() === client_data._id.toString())
    })
    Pet.findById(pet_data._id).then(pet => {
      assert(pet._id.toString() === pet_data._id.toString())
    })
    Service.findById(service_data._id).then(service => {
      assert(service._id.toString() === service_data._id.toString())
    })

    done()
  })
})
