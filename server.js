const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const db = require('./db/conn')
app.use("/css", express.static(path.join(__dirname, "/public/styles/")));
const partials_path = path.join(__dirname, "/views/partials");
app.set("view engine", "hbs");
hbs.registerPartials(partials_path);
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get('/contact',(req,res)=>{
  res.render("contact");
})
// const userRouter = require("./routes/router");
// app.use("/views", userRouter);
app.listen(3000, console.log("Server running sucessfully at port 3000"));
