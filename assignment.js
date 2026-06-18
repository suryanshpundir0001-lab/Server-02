// jai SitaRam

//making a server

const http = require("http");
const fs = require("fs");


const myServer = http.createServer((req,res) => {
    const log = `${Date.now()} : New Request Received\n`;
    
    fs.appendFile("log.txt",log, (err, data) => {
        res.end("hello from Server");
    })
});


myServer.listen(8000 , () => {
    console.log(`Server started at port number ${800}`);

})