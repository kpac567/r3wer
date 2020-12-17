const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const hbs = require('express-handlebars');
require("dotenv").config();

// get config of database
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true});

// on connect database
mongoose.connection.on('connected', () => {
    console.log('mongodb connected');
});

// on reject database
mongoose.connection.on('error', (err) => {
    console.log('database Rejected ...' + err);
});

// initialization app variable with express
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

// chats api routes
const chats = require('./backend/routes/api/chats');

// Port Number
const PORT = process.env.PORT || 5000;

// CORS Middleware
app.use(cors());

// Body Parser Middleware
app.use(bodyParser.json());
// using chats routes as localhost:portnumber/chats/nextpath.
app.use('/chats', chats);

users = [];

//Whenever someone connects this gets executed
io.on('connection', function(socket) {
    global.socket = socket;
    global.io = io;
    console.log('A user connected');
    socket.emit('yoo', {hey: 'jjjjj'})
    socket.on('setMsgBy', function(data) {
        console.log(data);
        // check this msgBy in chatroom of database
            users.push(data);
            socket.emit('userSet', {msgBy: data});
    });

    socket.on('msg', function(data) {
        //Send message to everyone
        io.sockets.emit('newmsg', data);
    });

    //Whenever someone disconnects this piece of code executed
    socket.on('disconnect', function () {
        console.log('A user disconnected........');
    });
});

if (process.env.NODE_ENV === 'production') {
        // set static folder
    // To serve static files such as images, CSS files, and JavaScript files
    app.use(express.static(path.join(__dirname, 'build')));// absolute path
    
    app.get("/*", (req, res) => {
        res.sendFile(path.join(__dirname, "build", "index.html"))
    });    
}

// start server here
http.listen(PORT, () => {
    console.log('SERVER started on port number: '+PORT);
});

