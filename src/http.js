const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

const getRandomDelay = () => {
    return (Math.random() * 2 + 1).toFixed(1);
};

const shouldReturnError = () => {
    return Math.random() < 0.1;
};

app.get('/', (req, res) => {
    const delay = getRandomDelay();

    setTimeout(() => {
        if (shouldReturnError()) {
            res.status(500).render('error', { delay });
        } else {
            res.status(200).render('index', { delay });
        }
    }, delay * 1000);
});

app.use((req, res, next) => {
    res.status(404).send('Sorry, page not found');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/`);
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
