const express = require("express");
const path = require("path");

const app = express();
const hbs = require("hbs");
const Register = require("./models/registers");
require("./db/conn");

const port = process.env.PORT || 3000;

const  static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");



app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(static_path));
// app.set("view engine","hbs");

// console.log(path.join(__dirname, "../public"));
// app.use(express.static(__dirname));

app.set("view engine", "hbs");
app.set("views",template_path);
hbs.registerPartials(partials_path);


app.get("/",(req,res)=>{
    
  res.render("index")
    
})
app.get("/register",(req,res)=>{
    res.render("register");
})


// create new user in database

app.post("/register", async(req,res) =>{
    // res.render("register");

    try{

     const password =  req.body.password;
     const cpassword = req.body.confirmpassword;

     if(password == cpassword){
       
        const registerEmployee = new Register({
             firstname: req.body.firstname, 
             lastname: req.body.lastname,
             email: req.body.email,
             gender: req.body.gender,
             phone:req.body.phone,
             age: req.body.age,
             password: password,
             confirmpassword: cpassword
        })

      const register =  await registerEmployee.save();

      res.status(201).render("index")

     }else{
        res.send("password are not matching")
     }

    //    console.log(req.body.firstname);
    //    res.send(req.body.firstname);

    } catch (error) {
       res.status(400).send(error); 
    }
})



app.listen(port,() => {
  console.log(`Server is running at port no ${port}`);  
})