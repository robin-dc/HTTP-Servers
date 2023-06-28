const { sendFormPage } = require("./routes");
const { parseBody } = require("./parse-body");
let server;

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE ABOVE THIS LINE *******************/

// Your code here
const http = require('http');

server = http.createServer((req, res) => {
    let reqBody = '';
    req.on('data', (data) => {
        reqBody += data;
    });

    req.on('end', () => {
        reqBody = parseBody(reqBody);
        req.body = reqBody
        sendFormPage(req, res);
    });
})


const port = 5000

server.listen(port, () => {
    console.log("Successfully started the server on port ",port)
})

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = { server };
