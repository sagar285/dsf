const path = require('path');
const express = require('express');
const app = express();
const hbs = require('hbs');
const {check,validationResult } = require("express-validator");
 const Usermodel=require("./model/conn");
const port = process.env.PORT || 4000;

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));



app.set('view engine', 'hbs');
app.set("views", template_path);
hbs.registerPartials(partials_path);

// console.log(static_path);
app.use(express.static(static_path));

app.get("", (req,res) =>{
    res.render('index')
})

app.get("/about",  (req,res) =>{
    res.render('about')
})


app.get("/weather", (req,res) =>{
    res.render("weather");
})

app.get("/signup",(req,res)=>{
    res.render("signup");
})
app.get("/register",(req,res)=>{
    res.render("register");
})
app.get("/course",(req,res)=>{
    res.render("course");
})
app.get("/contact",(req,res)=>{
    res.render("contact");
})
app.get("/blog",(req,res)=>{
    res.render("blog");
})
//create a new user in database 
// app.post("/signup", async (req,res)=>{
//    try {
//        const password = req.body.password;
//        const cpassword = req.body.confirmpassword;   // same honachahiyeschema m jo likha h 
//        if(password === cpassword){
      
//           const 
     
//        }else{
// res.send("password not matching");
//        }


//    } catch (error) {
//        console.log(error);
//    }

// })

app.post('/register',  (req,res)=>{
  
    console.log("form data is -",req.body);
          var register = new Usermodel({
            pickUpaddress:req.body.text[0],
            destination:req.body.text[1],
            phone:req.body.phone,
          })

          register.save().then(()=>{
              console.log("user resgistered");
          }).catch((e)=>{
            console.log("user registeration failed");
        });

   
           

   
  

})


app.get("*", (req,res) =>{
    res.render('404page', {
        errorMsg : "Opps! page not found, Click Here to go back"
    })
})


app.listen(port, () => {
    console.log(`listening to the port no at ${port}`);
})