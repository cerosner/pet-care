const mongoose = require('mongoose')
const Schema = mongoose.Schema

module.exports = mongoose.model('Owner', new Schema({
  name: {
    first: String,
    last: String
  }
}))
