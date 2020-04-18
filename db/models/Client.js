const mongoose = require('mongoose')
const Schema = mongoose.Schema

let ClientSchema = new Schema({
  name: {
    type: String,
    minLength: 1,
    required: true
  },
  pet_ids: [{
    type: Schema.Types.ObjectId,
    ref: 'Pet'
  }]
})

module.exports = mongoose.model('client', ClientSchema)
