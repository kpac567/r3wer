const mongoose = require("mongoose");
const connection = mongoose.connect("mongodb://localhost:27017/cards", { useNewUrlParser: true });
module.exports = connection;