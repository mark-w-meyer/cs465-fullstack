const fs = require('fs');

const news_hbs = JSON.parse(fs.readFileSync('./data/news.json', 'utf8'));

/* GET news view */
const news = (req, res) => {
    res.render('news', { title: 'News - Travlr Getaways Website Template', news_hbs });
};

module.exports = {
    news
};