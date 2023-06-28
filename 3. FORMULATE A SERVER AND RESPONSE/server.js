// Your code here
// 1. import built in http package
const http = require('http');

// 2. call the createServer method on the import
// 3. pass in a function as a single argument
// const server = http.createServer((req, res) => {
//     console.log(req.method)
//     console.log(req.url)
//     console.log(req.header)
// })
const responseBody = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello World!</title>
  </head>
  <body>
    <h1>Hello there!</h1>
  </body>
  </html>
`;
const server = http.createServer((req, res) => {
    console.log(req.method, req.url)
    res.statusCode = 302;
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.write(responseBody);
    res.end();
})


// 4. define the port number and assign it to a variable `port`
const port = 5000

// 5. use the listen method on the newly created server
server.listen(port, () => {
    console.log('Server listening on port: ', port)
})
// 6. pass in 2 arguments (port, callback <= will run once the server connection to the port is successful)
// 7. log a message to know the server is connected
