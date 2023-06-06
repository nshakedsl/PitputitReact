const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    io.emit('Hello', { foo: 'bar' });
    socket.broadcast.emit('hi');
    socket.on('disconnect', () => {
        console.log('disconnected');
    });
    socket.on('foo', (msg) => {
        console.log('message: ' + msg);
    });
});

server.listen(3000);