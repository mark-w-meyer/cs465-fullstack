const mongoose = require('mongoose');

// Define the news schema
const newsSchema = new mongoose.Schema({
    code: {type: String, required: true, index: true },
    name: {type: String, required: true, index: true},
    news: {type: String, required: true},
});

module.exports = mongoose.model("news", newsSchema);