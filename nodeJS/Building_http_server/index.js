const http = require("http");
const fs = require("fs");

// we need a handler function, which can handle our incoming request.createserver has a callback function- request listener, which helps in processing the incoming request.

const server = http.createServer((req,res) => {

    const log = `${Date.now()}  |  ${req.url} : New request received\n`;
    fs.appendFile("./log.txt" , log , (err,data) => {

        switch(req.url){
            case '/' : res.end("HomePage");break;
            case '/about' : res.end("I am sanjil sharma");break;
            default: res.end("404 Not Found");
        }

        console.log("New Server started");
        

    })
    
});

server.listen(3000, (req,res)=> {
    console.log('server is running at port 3000.');
})

