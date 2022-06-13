var fs = require('fs');

var meals_hbs = JSON.parse(fs.readFileSync('./data/meals.json', 'utf8'));

/* GET meals view */
const meals = (req, res) => {
    res.render('meals', { title: 'Foods - Travlr Getaways Website Template', meals_hbs });
};

module.exports = {
    meals
};