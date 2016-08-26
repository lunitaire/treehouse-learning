var router = require("./router.js");
// Problem: We need a simple way to look at a user's badge count and JavaScript point from a web browser
// Solution: Use Node.js to perform the profile look ups and server our template via HTTP

// Create a web server

const http = require('http');

//const hostname = '<workspace-url>';
const port = 3000;

const server = http.createServer((request, response) => {
  router.home(request,response);
  router.user(request,response);
});

server.listen(port, () => {
  console.log(`Server running at http://<workspace-url>:${port}/`);
});




