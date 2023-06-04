const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const auth = require('./middleware/Auth');

const chat = require('./routes/chat');
const user = require('./routes/user');
const tokens = require('./routes/tokens');

const app = express();
const corsOptions = {
    origin: 'http://localhost:3000', // Replace with your allowed domain
};


require('custom-env').env(process.env.NODE_ENV, './config');
mongoose.connect(process.env.CONNECTION_STRING,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Add '/api' to all routes
const apiRouter = express.Router();
app.use('/api', cors(corsOptions), apiRouter);

apiRouter.use('/Chats', auth, chat);
apiRouter.use('/Users', user);
apiRouter.use('/Tokens', tokens);

app.listen(process.env.PORT);
