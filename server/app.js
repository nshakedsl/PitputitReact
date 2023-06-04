const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const auth = require('./middleware/Auth');
const chat = require('./routes/chat');
const user = require('./routes/user');
const tokens = require('./routes/tokens');
const app = express();

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
    useUnifiedTopology: true
});

app.listen(process.env.PORT);
