const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
require('./db/conn');
const User = require('./db/models/userSchema');
const { urlencoded } = require("express");

//setting the path
const partials_path = path.join(__dirname, "/views/partials");

//middleware
app.use(express.urlencoded({extended : false}));
app.use("/css", express.static(path.join(__dirname, "/public/styles/")));
app.set("view engine", "hbs");
hbs.registerPartials(partials_path);

//routing
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get('/contact',(req,res)=>{
  res.render("contact");
})
app.post('/contact',async(req,res)=>{
  try {
    // res.send(req.body) //to get the data
    const userData = new User(res.body)
    await userData.save()
    res.status(201).render('index') //to get back to home page
  } catch (error) {
    res.status(500).send(error) 
  }
})
// const userRouter = require("./routes/router");
// app.use("/views", userRouter);
app.listen(3000, console.log("Server running sucessfully at port 3000"));
