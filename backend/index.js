require('dotenv').config();
const cookieSession = require('cookie-session');
const express = require('express');
const passport = require('passport');
const cors = require('cors');
const router = require('./routes/auth');
const passportConfig = require('./passportConfig'); // important : Import the passport configuration

const app = express();

app.use(cookieSession({
    name: 'session',
    keys: ["lama"],
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
}));

app.use(passport.initialize());
app.use(passport.session());

const corsOptions = {
    origin: process.env.CLIENT_URL,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // if you need to include cookies in the requests
  };

app.use(cors(corsOptions));

app.use('/auth',router);

app.listen("5000", () => {
    console.log("Server running on port 5000");
});