// jai SitaRam 

//require the http module
const http = require('http');

//function to create server
const myServer = http.createServer((req,res) => {
    // console.log("New Request recieved");
    console.log(req.headers);
    res.end("hello from server"); 
    // --> jab bhi request aaye ye output karo
});

//takign port number to run the server
myServer.listen(8000 , () => {
    console.log(`Server started at port number ${800}`);

})
