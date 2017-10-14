var http = require("http");
var fs = require("fs");

var PORT = 8080;

var server = http.createServer(handleRequest);

// Start our server
server.listen(PORT, function() {
  // Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:" + PORT);
});

// Create a function which handles incoming requests and sends responses
function handleRequest(req, res) {

  // Capture the url the request is made to
  var path = req.url;

  // Depending on the URL, display a different HTML file.
  switch (path) {

    case "/":
      displayRoot(path, req, res, "Favorite Things", "");
      break;
    case "/favorite-foods":
      displayRoot(path, req, res, "Favorite Foods", "<li>Pizza</li> <li>Tacos from Wes</li> <li>Tacos from Wes just because</li>");
      break;
    case "/favorite-movies":
      displayRoot(path, req, res, "Favorite Movies", "<li>Horses are Delicious</li> <li>Wes</li> <li>Dig 2 Graves</li>");
      break;
    case "/favorite-css-frameworks":
      displayRoot(path, req, res, "Favorite Css", "<li>Foundation</li> <li>Bootstrap cause its there</li> <li>Anything but Foundation</li>");
      break;

    default:
      display404(path, req, res);
  }
}

// When someone visits the "http://localhost:8080/" path, this function is run.
function displayRoot(url, req, res, header, list) {
  fs.readFile('./index.html', 'utf-8', function(err, data){
    if(err) console.log("error in displayRoot");
    res.writeHead(200, { "Content-Type": "text/html" });
    var actualHtml = String(data).replace("{{Page Name}}", header);
    actualHtml = actualHtml.replace("{{list}}", list);
    res.end(actualHtml);
  });
}

// When someone visits any path that is not specifically defined, this function is run.
function display404(url, req, res) {
  var myHTML =  "<html>" +url
    "<body><h1>404 Not Found </h1>" +
    "<p>Cannot find this person: " + url + "</p>" +
    "</body></html>";

  res.writeHead(404, { "Content-Type": "text/html" });
  res.end(myHTML);
}
