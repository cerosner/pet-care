const mongoose = require('mongoose')
const Schema = mongoose.Schema

module.exports = mongoose.model('Service', new Schema({
  category: String,
  fee: Number,
  duration: {
    type: Number,
    default: 1
  }
}))
