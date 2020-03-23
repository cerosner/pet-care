const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AddressSchema = new Schema({
  location: String,
  lockbox: Number,
  keyPossession: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('Address', AddressSchema)
