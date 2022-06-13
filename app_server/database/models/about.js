const mongoose = require('mongoose');

// Define the about schema
const aboutSchema = new mongoose.Schema({
    code: {type: String, required: true, index: true },
    name: {type: String, required: true, index: true},
    body: {type: String, required: true},
    ads: {type: String, required: true},
    body2: {type: String, required: true}
});

module.exports = mongoose.model("about", aboutSchema);