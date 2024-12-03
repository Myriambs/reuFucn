const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema({
  name: { type: String, required: true },
  subject: { type: String, required: true },
  age: { type: Number, required: true },
  email:{type:String,required:true,unique:true},
  COntractType:{type:String,enum:['CDI','CDD','SIVP','Alternant']}

});

module.exports = mongoose.model('Teacher', TeacherSchema);