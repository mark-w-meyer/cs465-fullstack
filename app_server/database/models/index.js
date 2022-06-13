const mongoose = require('mongoose');

// Define the index schema
const indexSchema = new mongoose.Schema({
    code: {type: String, required: true, index: true },
    name: {type: String, required: true, index: true},
    intro_title: {type: String, required: true},
    intro: {type: String, required: true},
    blog_title1: {type: String, required: true},
    blog_date1: {type: String, required: true},
    blog1: {type: String, required: true},
    blog_title2: {type: String, required: true},
    blog_date2: {type: String, required: true},
    blog2: {type: String, required: true},
    testimonials: {type: String, required: true},
    image1: {type: String, required: true},
    image2: {type: String, required: true},
    image3: {type: String, required: true},
    image4: {type: String, required: true}
});

module.exports = mongoose.model("index", indexSchema);