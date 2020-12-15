const mongoose = require ('mongoose')

const cardSchema = mongoose.Schema({
    name: String,
    borough: String,
    imgUrl: String,
})

module.exports = mongoose.model('Card', cardSchema);