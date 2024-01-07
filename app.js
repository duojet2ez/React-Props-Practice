const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.static('public'));
app.use(express.static('src'));
app.use(express.static('dist'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

/*
const hostname = '127.0.0.1';

 
const homePage = readFileSync('./public/index.html');
const scriptLoad = readFileSync('./dist/main.js'); 
const style = readFileSync('./src/assets/styles/style.css'); 
const airbnbLogo = readFileSync('./public/assets/images/airbnb1.png'); 
const photoGrid = readFileSync('./public/assets/images/photo-grid.png'); 
const katiePhoto = readFileSync('./public/assets/images/katie.png');
const starPhoto = readFileSync('./public/assets/images/star.png');


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
    else if(url === '/public/assets/images/airbnb1.png'){
        console.log('logo image found'); 
        res.writeHead(200, {'content-type':'image/png'});
        res.write(airbnbLogo);
        res.end(); 
    }
    else if(url === '/public/assets/images/photo-grid.png'){
        console.log('photo grid image found'); 
        res.writeHead(200, {'content-type':'image/png'});
        res.write(photoGrid);
        res.end(); 
    }
    else if(url === '/public/assets/images/katie.png'){
        console.log('katie image found'); 
        res.writeHead(200, {'content-type':'image/png'});
        res.write(katiePhoto);
        res.end(); 
    }
    else if(url === '/public/assets/images/star.png'){
        console.log('star image found'); 
        res.writeHead(200, {'content-type':'image/png'});
        res.write(starPhoto);
        res.end(); 
    }
});
 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

*/