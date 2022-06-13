const mongoose = require('mongoose');

// Define the meals schema
const mealsSchema = new mongoose.Schema({
    code: {type: String, required: true, index: true },
    name: {type: String, required: true, index: true},
    image: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true}
});

module.exports = mongoose.model("meals", mealsSchema);