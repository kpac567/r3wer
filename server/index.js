const express = require('express');
const mongoose = require("mongoose");
const db = require("./models");

const bodyParser = require('body-parser');
const axios = require("axios")

//load .env
require('dotenv').config();

// app config
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/cards");

const app = express();
//parse requests of content-type -application/x-www--form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
//parse requests of content-type -application/json
app.use(bodyParser.json());

//CORS middleware to allow access
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

const auth = require('./middleware/auth');

const router = express.Router();
//register routes
const register = require('./routes/register');
const authentication = require('./routes/authentication');
const category = require('./routes/category');

// test route
router.get('/', function(req, res) {
    res.json({ message: 'welcome to our upload module apis' });
});

const passport = require("./authentication/passport");
const authRoutes = require("./authentication/authRoutes");
const { default: Axios } = require("axios");

//middleware
app.use("/auth", authRoutes);

//api endpoints
app.post("/api/user", async (req, res) => {
   const user = await db.User.create(req.body);
   res.json(user);

})
app.get("/", (req, res) => res.status(200).send("Hello World"));

app.post("/cards", (req, res) => {
    const card = req.body.user;

    db.Card.create(card, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
});

app.get("/api/parks", (req, res) =>{
//get data from open data api
axios.get("https://data.cityofnewyork.us/resource/wswf-9pts.json").then(function(response) {
    console.log(response.data);
    const parks=response.data.map(park => {
        return {
            borough: park.borough,
            name: park.name,
            status: park.status
        }
    })
   res.json(parks);
  });
//organize data in format
//send data with response

})

app.get("/api/cards", (req, res) => {
    //  const Card = req.body.user;

    // const req = await axios.get("/crushdb/cards");
    db.Card.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    })
});

const port = process.env.PORT || 4000;
app.listen(port, function () {
    console.log(`Listening through port ${port}. `);
});
