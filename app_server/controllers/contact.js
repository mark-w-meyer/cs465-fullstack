const fs = require('fs');

const contact_hbs = JSON.parse(fs.readFileSync('./data/contact.json', 'utf8'));

/* GET contact view */
const contact = (req, res) => {
    res.render('contact', { title: 'Contact - Travlr Getaways Website Template', contact_hbs });
};

module.exports = {
    contact
};