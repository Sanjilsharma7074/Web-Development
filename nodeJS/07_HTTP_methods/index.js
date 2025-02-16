const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req,res) => {
    if(req.url === "/favicon.ico") return res.end();
    const log = `${Date.now()} || ${req.url} || ${req.method} || New server Started Successfully.\n`;
    const myurl = url.parse(req.url,true);
    // console.log(myurl);
    
    fs.appendFile("./log.txt",log,(err,data) => {
        switch(myurl.pathname){
            case "/": 
                if(req.method==="GET") res.end("HomePage");break;
            case "/about": res.end("About page");break;
            case "/search":
                const username = myurl.query.search_query;
                res.end(`Hi, ${username}`);
                break;
            case "/signup":
                if(req.method==="GET") res.end("This is a sign up form");
                else if(req.method==="POST"){
                    //DB Query
                    res.end("Success");
                }
            default:res.end("404 Not Found : Error.")
        }
    })
})
myServer.listen(3001, (req,res) => {
    console.log("the server is running at port 3001");
    
})