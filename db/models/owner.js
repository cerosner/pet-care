const mongoose = require('mongoose')
const Schema = mongoose.Schema

let PetSchema = new Schema({
  name: String,
  category: String,
  meta: {
    notes: String
  }
})

module.exports = mongoose.model('Owner', new Schema({
  name: {
    first: String,
    last: String
  },
  pet: PetSchema
}))
