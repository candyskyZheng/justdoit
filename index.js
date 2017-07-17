var http = require("http"),
    fs = require("fs");

http.createServer(function (req, res) {
    let pathname = "./index.html";
    console.log(`pathname:${pathname}`);
    res.writeHead(200, {"Content-Type": "text/html"});
    fs.readFile(pathname, function (err, data) {
        res.end(data);
    });
}).listen(8101  , "127.0.0.1");

console.log('start listen');
