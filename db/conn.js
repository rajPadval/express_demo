const mongoose = require("mongoose");
const db_pass = 'Zebronics'
const db_name = 'expressDemo'
const mongo_uri =`mongodb+srv://rajpadval:${db_pass}@cluster0.jil81.mongodb.net/${db_name}?retryWrites=true&w=majority`;

// const mongo_uri = "mongodb://localhost:27017/express_demo_pg"
mongoose.connect(mongo_uri,()=>{
    console.log(`Connection to the database sucessfull`);
})

