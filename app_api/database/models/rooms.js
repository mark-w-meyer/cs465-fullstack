const mongoose = require('mongoose');

// Define the rooms schema
const roomsSchema = new mongoose.Schema({
    code: {type: String, required: true, index: true },
    name: {type: String, required: true, index: true},
    image: {type: String, required: true},
    description: {type: String, required: true},
    rate: {type: String, required: true}
});

module.exports = mongoose.model("rooms", roomsSchema);