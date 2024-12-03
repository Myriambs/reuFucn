const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  grade: { type: Number, required: true },
  age: { type: Number, required: true },
  email:{type:String,required:true,unique:true},
  
});

module.exports = mongoose.model('Student', StudentSchema);