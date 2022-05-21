const fs = require('fs');

const about_hbs = JSON.parse(fs.readFileSync('./data/about.json', 'utf8'));

/* GET about view */
const about = (req, res) => {
    res.render('about', { title: 'About - Travlr Getaways Web Template', about_hbs });
};

module.exports = {
    about
};