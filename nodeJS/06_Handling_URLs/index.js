const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
    if (req.url === "/favicon.ico") return res.end();
    const log = `${Date.now()}  |  ${req.url} : New request received\n`;

    const myurl = url.parse(req.url,true);
//     query: [Object: null prototype] {
//     name: 'sanjil',
//     user: '12',
//     search: 'httprequests'
//   },

    console.log(myurl);
    

    fs.appendFile("./log.txt", log, (err, data) => {
        switch (myurl.pathname) {
        case "/":
            res.end("HomePage");
            break;


        // case "/about":
        //     res.end("I am sanjil sharma");
        //     break;
        case "/about" :
            const username = myurl.query.name;
            const id = myurl.query.user;
            const search = myurl.query.search;
            res.end(`hi ${username}\nYour user id is: ${id}\nYou have searched for : ${search}`);
            break;


        case "/search": 
            const find = myurl.query.search_query;
            res.end("Here are you results for "+ find);

        default:
            res.end("404 Not Found");
        }

    // console.log("New Server started");
  });
});

server.listen(3000, (req, res) => {
  console.log("server is running at port 3000.");
});
