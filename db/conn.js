const mongoose = require("mongoose");
const validator = require('validator')
const mongo_uri =
  "mongodb+srv://rajpadval:Raj@123@cluster0.jil81.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongo_uri,()=>{
    console.log(`Connection to the database sucessfull`);
})

mongoose.Schema({
  name:{
    type:String,
    required:true,
  }
})
