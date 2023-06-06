const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const auth = require('./middleware/Auth');
const chat = require('./routes/chat');
const user = require('./routes/user');
const tokens = require('./routes/tokens');
const app = express();
const http = require('http');
const { Server } = require('socket.io');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Enable CORS
app.use(cors());

require('custom-env').env(process.env.NODE_ENV, './config');
app.use('/api/Chats', auth, chat);
app.use('/api/Users', user);
app.use('/api/Tokens', tokens);
app.use(express.static('public'));

mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000'
    }
});

io.on('connection', (socket) => {
    console.log('A user connected');
    socket.on('myuser', user => {
        socket.join(user)
    })

    socket.on('sendMessage', (data) => {
        console.log('data: ', data);
        io.to(data.username).emit('receiveMessage', data.responseData);
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

server.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
});
