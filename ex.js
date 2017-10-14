
//import package required for my server
var http = require("http");

// this sets up the logical place in the computer to listen
// var PORT1 = 7000;
// var PORT2 = 7500;

// creates the function to process the request and eventually send a response
function handleRequestNice(request, response) {

  // my response is sent
  response.end("Mike has nice hair!");
}

// creates the function to process the request and eventually send a response
function handleRequestMean(request, response) {
  
    // my response is sent
    response.end("Mike has bad hair!");
  }

//  creates the server
var server = http.createServer(handleRequestNice);

// starts the server and begins listening on that port
server.listen(7000, function() {

// tells me the server has started
console.log("Server listening on: http://localhost:" + 7000);
console.log("Have a nice life!");
});

//  creates the server
var server2 = http.createServer(handleRequestMean);

// starts the server and begins listening on that port
server2.listen(7500, function() {
    
// tells me the server has started
console.log("Server listening on: http://localhost:" + 7500);
console.log("This is why we can't have nice things!");
});
