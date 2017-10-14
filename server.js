var http = require("http");
var fs = require("fs");

var PORT = 8080;

//  creates the server
var server = http.createServer(handleRequest);

// starts the server and begins listening on that port
server.listen(PORT, function() {

switch (path) {

    case "/":
    displayRoot(path, req, res);
    break;

    case "/portfolio":
    displayPortfolio(path, req, res);
    break;

    default:
    display404(path, req, res);
}

function 