const http = require('http');
const {readFileSync} = require('fs'); 
const fs = require('fs');  

const hostname = '127.0.0.1';
const port = 3000;
 
const homePage = readFileSync('../public/index.html');
const scriptLoad = readFileSync('../dist/main.js'); 

const server = http.createServer((req, res) => {
    const url = req.url
    if(url === '/'){
        res.writeHead(200, {'content-type':'text/html'}); 
        res.write(homePage); 
        console.log('home page found');
        res.end(); 
    }
    else if(url === '/dist/main.js'){
        console.log('script found'); 
        res.writeHead(200, {'content-type':'text/javascript'});
        res.write(scriptLoad);
        res.end();
    }

});
 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});