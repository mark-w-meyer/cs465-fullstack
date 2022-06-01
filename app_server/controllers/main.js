const fs = require('fs');

const index_hbs = JSON.parse(fs.readFileSync('./data/index.json', 'utf8'));

/* GET homepage */
const index = (req, res) => {
    res.render('index', { title: 'Travlr Getaways', index_hbs });
};
module.exports = {
    index
};
