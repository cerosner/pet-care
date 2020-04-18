const mongoose = require('mongoose')
const Schema = mongoose.Schema

let ServiceSchema = new Schema({
  category: String,
  fee: Number,
  forPet: {
    type: Schema.Types.ObjectId,
    ref: 'Pet'
  },
  duration: {
    type: Number,
    default: 1
  }
})

module.exports = mongoose.model('service', ServiceSchema)
