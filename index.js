// Import the http and fs modules
const http = require('http');
const fs = require('fs');

// Define the port number
const port = 3000;

// Define the routes
const routes = {
  '/': 'index.html',
  '/page1': 'page1.html',
  '/page2': 'page2.html',
  '/page3': 'page3.html',
  '/page4': 'page4.html',
  '/page5': 'page5.html'
};

// Create the server
const server = http.createServer((req, res) => {
  // Get the requested URL
  const url = req.url;

  // Get the file path for the requested URL
  const filePath = `./${routes[url]}`;

  // Read the file and send the response
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('File not found');
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    }
  });
});

// Start the server
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
