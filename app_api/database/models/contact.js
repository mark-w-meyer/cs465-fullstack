const mongoose = require('mongoose');

// Define the contact schema
const contactSchema = new mongoose.Schema({
    code: {type: String, required: true, index: true },
    name: {type: String, required: true, index: true},
    info: {type: String, required: true},
    contact_name: {type: String, required: true},
    email: {type: String, required: true},
    subject: {type: String, required: true},
    button: {type: String, required: true}
});

module.exports = mongoose.model("contact", contactSchema);