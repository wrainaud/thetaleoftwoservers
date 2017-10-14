//many servers are big monsters of code and configuration,
//this server has all components that are common to all servers

//take a look at each line and make a guess as to what each line does
//work with a person next to you and use the context/vocabulary words 
//to guess at the purpose of each line

//import package required for my server
var http = require("http");

// this sets up the logical place in the computer to listen
var PORT = 8080;

// creates the function to process the request and eventually send a response
function handleRequest(request, response) {

  // my response is sent
  response.end("It Works!! Path Hit: " + request.url);
}

//  creates the server
var server = http.createServer(handleRequest);

// starts the server and begins listening on that port
server.listen(PORT, function() {

  // tells me the server has started
  console.log("Server listening on: http://localhost:" + PORT);
});