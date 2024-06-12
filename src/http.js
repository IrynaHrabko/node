const http = require('http');
const fs = require('fs');

const getRandomDelay = () => {
    return Math.floor(Math.random() * 2000) + 1000;
};

const shouldReturnError = () => {
    return Math.random() < 0.1;
};

const server = http.createServer((req, res) => {
    const delay = getRandomDelay();
    
    setTimeout(() => {
        if (shouldReturnError()) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Internal Server Error');
        } else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            const readStream = fs.createReadStream('index.html');
            readStream.pipe(res);
        }
    }, delay);
});

const port = 8080;

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

const handleShutdown = () => {
    console.log('Shutting down server...');
    server.close(() => {
        console.log('Server has been shut down.');
        process.exit(0);
    });
};

process.on('SIGINT', handleShutdown);
process.on('SIGTERM', handleShutdown);