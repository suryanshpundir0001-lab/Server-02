// jai SitaRam


//making a server using http module 

const http = require("http");
const fs = require("fs");

//callback inside it is a handler function
const myServer = http.createServer((req,res) => {
    const log = `${Date.now()} : New Request Received\n`;
    
    fs.appendFile("log.txt",log, (err, data) => {
        // res.end("hello from Server"); m1
        //M2
        switch(req.url){
            case "/":
                res.end("HomePage");
                break;
            case "/about":
                res.end("I am Suryansh Pundir");
                break;
            default:
                res.end("404 Not Found");
        }
    })
});

myServer.listen(8000 , () => {
    console.log(`Server started at port number ${800}`);

})