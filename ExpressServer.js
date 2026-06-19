//jai SitaRam

const http = require("http");

//first require the express
const express = require("express");

//then we make a app

const app = express();
//though this app we can do anything

//type of request to
app.get("/", (req,res) =>{      //iska matlab hai ki jab is path pe req aaegi
    return res.send("Hello from Home Page");    //to ye run kar jaega
})
app.get("/about",(req,res) =>{
    return res.send("Hello From Suryansh Pundir");

})
// app.post("/") we do this also
//now i i want to pass the query parametrs to (like ?name=suryansh)
//for the we have built it (req.query.name) ....name is not exactly name 
//bu the name of any query parametrs
app.get("/contactUs", (req,res) =>{
    console.log("we got a request");
    return res.send("Coonect with me " + ' hey ' + req.query.name);

})

app.get("/courses",(req, res)=>{
    console.log("Requesting for the courses");
    res.send("Hello guys welcome to your courses " + req.query.course + " from ",req.query.name);

})

//now just we nned to replace this handler by my app 

const myServer = http.createServer(app);
myServer.listen(8000, ()=> console.log("Server Started !"));

