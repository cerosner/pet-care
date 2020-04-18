const mongoose = require('mongoose')
const Schema = mongoose.Schema

let PetSchema = new Schema({
  name: {
    type: String,
    minLength: 1,
    required: true
  },
  category: String,
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'Client'
  },
  service_ids: [{
    type: Schema.Types.ObjectId,
    ref: 'Service'
  }]
})

module.exports = mongoose.model('pet', PetSchema)
