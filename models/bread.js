// require mongoose 
const mongoose = require('mongoose')
// creating shorthand for the Schema constructor 
const { Schema } = mongoose
const Baker = require('./baker');

// schema
const breadSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  baker: {
    type: Schema.Types.ObjectId,
    ref: 'Baker',
    required: true
  },
  ingredients: [String]
});

// helper methods 
breadSchema.methods.getBakedBy = function(){
  return `${this.name} was baked with love by ${this.baker.name}, who has been with us since ${this.baker.startDate}`
}

// model and export 
const Bread = mongoose.model('Bread', breadSchema)

module.exports = Bread

