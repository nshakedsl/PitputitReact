const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const chat = require('./routes/chat');
const user = require('./routes/user');
const tokens = require('./routes/tokens');

require('custom-env').env(process.env.NODE_ENV, './config');
mongoose.connect(process.env.CONNECTION_STRING,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use('/Chats', chat);
app.use('/Users', user);
app.use('/Tokens', tokens);

app.listen(process.env.PORT);