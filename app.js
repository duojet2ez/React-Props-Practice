const http = require('http');
const {readFileSync} = require('fs'); 
const fs = require('fs');  

const hostname = '127.0.0.1';
const port = 3000;
 
const homePage = readFileSync('./public/index.html');
const scriptLoad = readFileSync('./dist/main.js'); 
const style = readFileSync('./src/assets/styles/style.css'); 
const airbnbLogo = readFileSync('./src/assets/images/airbnb1.png'); 
const photoGrid = readFileSync('./src/assets/images/photo-grid.png'); 
const katiePhoto = readFileSync('./src/assets/images/katie.png');
const starPhoto = readFileSync('./src/assets/images/star.png');

const server = http.createServer((req, res) => {
    const url = req.url
    if(url === '/'){
        res.writeHead(200, {'content-type':'text/html'}); 
        res.write(homePage); 
        console.log('home page found');
        res.end(); 
    }
    else if(url === '/src/assets/styles/style.css'){
        console.log('stylesheet found'); 
        res.writeHead(200, {'content-type':'text/css'});
        res.write(style);
        res.end(); 
    }
    else if(url === '/dist/main.js'){
        console.log('script found'); 
        res.writeHead(200, {'content-type':'text/javascript'});
        res.write(scriptLoad);
        res.end();
    }
    else if(url === '/assets/images/airbnb1.png'){
        console.log('logo image found'); 
        res.writeHead(200, {'content-type':'image/png'});
        res.write(airbnbLogo);
        res.end(); 
    }
    else if(url === '/assets/images/photo-grid.png'){
        console.log('photo grid image found'); 
        res.writeHead(200, {'content-type':'image/png'});
        res.write(photoGrid);
        res.end(); 
    }
    else if(url === '/assets/images/katie.png'){
        console.log('katie image found'); 
        res.writeHead(200, {'content-type':'image/png'});
        res.write(katiePhoto);
        res.end(); 
    }
    else if(url === '/assets/images/star.png'){
        console.log('star image found'); 
        res.writeHead(200, {'content-type':'image/png'});
        res.write(starPhoto);
        res.end(); 
    }
});
 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});