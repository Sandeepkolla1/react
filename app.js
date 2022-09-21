const express = require('express');

const server = express();
server.get('/', (req, res) => {
    res.send('Hello world on Homepage');
});
server.get('/saybye', (req, res) => {
    res.send('Good Bye');
});
server.listen(4500);