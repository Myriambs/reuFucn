// app.js
const express = require('express');
const mongoose = require('mongoose');
const teacherRoutes = require('./routes/teacherRoutes.js');
const studentRoutes = require('./routes/studentRoutes.js');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/teachers', teacherRoutes);
app.use('/students', studentRoutes);

// MongoDB Connection
const db=async()=>{
    try{
    await  mongoose.connect('mongodb+srv://bensalahmeriem0:mwo8LxccgItqTNEZ@cluster0.fwzig.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'),{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
  console.log('MongoDB Connected');    }catch(err){
    
        console.log(err)
    }
}
db()
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
