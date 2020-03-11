const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Owner = mongoose.model('owner', new Schema({
  name: String,
  pet: String,
  address: String
}))

module.exports = Owner
