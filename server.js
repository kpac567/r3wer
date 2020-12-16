const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const hbs = require('express-handlebars');
require("dotenv").config();

// get config of database
mongoose.connect(process.env.DATABASE_URL);

// on connect database
mongoose.connection.on('connected', () => {
    console.log('mongoose connected');
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

// set static folder
// To serve static files such as images, CSS files, and JavaScript files
app.use(express.static(path.join(__dirname, 'build')));// absolute path

// Body Parser Middleware
app.use(bodyParser.json());
// using chats routes as localhost:portnumber/chats/nextpath.
app.use('/chats', chats);

//Whenever someone connects this gets executed
io.on('connection', function(socket) {
    console.log('A user connected..........');

    //Whenever someone disconnects this piece of code executed
    socket.on('disconnect', function () {
        console.log('A user disconnected........');
    });
});

users = [];
io.on('connection', function(socket) {
    console.log('A user connected');
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
});

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"))
})

// start server here
http.listen(PORT, () => {
    console.log('SERVER started on port number: '+PORT);
});

