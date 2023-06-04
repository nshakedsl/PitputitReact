const express = require('express');//
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const auth = require('./middleware/Auth');


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

// // Serve static files from the 'public' directory
app.use(express.static('public'));


app.use('/Chats', auth, chat);
app.use('/Users', user);
app.use('/Tokens', tokens);

app.listen(process.env.PORT);