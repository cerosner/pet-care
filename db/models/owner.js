const mongoose = require('mongoose')
const Schema = mongoose.Schema

module.exports = mongoose.model('Owner', new Schema({
  firstName: String,
  lastName: String,
  petName: String,
  duration: {
    type: Number,
    default: 1
  }
}))
