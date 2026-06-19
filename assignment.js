// jai SitaRam

//making a server using http module 

const http = require("http");
const fs = require("fs");

const url = require("url");

//callback inside it is a handler function
const myServer = http.createServer((req,res) => {
    console.log(req.url);

    const log = `${Date.now()} :   ${req.url} New Request Received\n`;

    // if i do this 
    const myUrl = url.parse(req.url);
    console.log(myUrl);
    
    fs.appendFile("log.txt",log, (err, data) => {
        // res.end("hello from Server"); m1
        //M2
        switch(req.url){    //req.url li value pe switch case lagaya
            case "/":
                res.end("HomePage");
                break;
            case "/about":
                res.end("I am Suryansh Pundir");
                break;
            default:
                res.end("404 Not Found");
        }
    });
});

myServer.listen(8000 , () => {
    console.log(`Server started at port number 8000`);
});