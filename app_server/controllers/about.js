const fs = require('fs');

const about_hbs = JSON.parse(fs.readFileSync('./data/about.json', 'utf8'));

/* GET About view */
const about = (req, res) => {
    res.render('about', { title: 'About - Travlr Getaways Website Template', about_hbs });
};

module.exports = {
    about
};