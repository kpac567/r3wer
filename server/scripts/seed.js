const db = require ("../models");
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/cards");

db.Card.insertMany([
    {
        name: "Erik Meyers",
        borough: "Manhattan",
        imgUrl: "https://randomuser.me/api/portraits/men/83.jpg",
    },
    {
        name: "Leondard Mendoza",
        borough: "Queens",
        imgUrl: "https://randomuser.me/api/portraits/men/9.jpg",
    },
    {
        name: "Delores Adams",
        borough: "Brooklyn",
        imgUrl: "https://randomuser.me/api/portraits/women/49.jpg",
    },
    {
        name: "Brad Gibson",
        borough: "Queens",
        imgUrl: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
        name: "Alice Perez",
        borough: "Bronx",
        imgUrl: "https://randomuser.me/api/portraits/women/41.jpg",
    },
    {
        name: "Troy Ford",
        borough: "Manhattan",
        imgUrl: "https://randomuser.me/api/portraits/men/30.jpg",
    },
    {
        name: "Vincent Sutton",
        borough: "Staten Island",
        imgUrl: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    {
    name: "Sandra Smith",
    borough: "Brooklyn",
    imgUrl: "https://randomuser.me/api/portraits/women/50.jpg",
},
{
    name: "Myrtle Patterson",
    borough: "Brooklyn",
    imgUrl: "https://randomuser.me/api/portraits/women/46.jpg",
},
{
    name: "Adrian Boyd",
    borough: "Mahattan",
    imgUrl: "https://randomuser.me/api/portraits/men/51.jpg",
},
{
    name: "Alvin Terry",
    borough: "Mahattan",
    imgUrl: "https://randomuser.me/api/portraits/men/80.jpg",
},
{
    name: "Harry Gonzales",
    borough: "Brooklyn",
    imgUrl: "https://randomuser.me/api/portraits/men/19.jpg",
},
{
    name: "Sofia Holmes",
    borough: "Mahattan",
    imgUrl: "https://randomuser.me/api/portraits/women/80.jpg",
},
{
    name: "Darlene Hopkins",
    borough: "Staten Island",
    imgUrl: "https://randomuser.me/api/portraits/women/3.jpg",
},
{
    name: "Becky Sims",
    borough: "Brooklyn",
    imgUrl: "https://randomuser.me/api/portraits/women/67.jpg",
},
])
