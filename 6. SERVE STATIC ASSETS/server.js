const http = require('http');
const fs = require("fs");


function findContentType(url){
  const array = url.split('/')
  const file = array[array.length - 1]
  const fileParts = file.split('.')
  const fileExtension = fileParts[fileParts.length - 1]

  if(fileExtension === 'css'){
    return 'text/css'
  }
  if(fileExtension === 'jpg' || fileExtension === 'png'){
    return 'image/jpeg'
  }
  else{
    return 'text/html'
  }

}

function changeUrl(url){
  const array = url.split('/')
  array.shift()
  array.shift()
  return array.join('/')
}

const server = http.createServer((req, res) => {
  // Your code here

  if(req.url.startsWith('/static')){
    const newUrl = `assets/${changeUrl(req.url)}`
    const contentType = findContentType(req.url)

    const request =  fs.readFileSync(newUrl);

    res.statusCode = 200;
    res.setHeader('Content-Type', contentType);
    res.write(request);
  }

  const htmlFile =  fs.readFileSync('./index.html');

  res.statusCode = 200;
  // res.setHeader('Content-Type', contentType);
  res.end(htmlFile);

});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));
