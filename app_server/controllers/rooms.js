const fs = require('fs');

const rooms_hbs = JSON.parse(fs.readFileSync('./data/rooms.json', 'utf8'));

/* GET rooms view */
const rooms = (req, res) => {
    res.render('rooms', { title: 'Rooms - Travlr Getaways Website Template', rooms_hbs });
};

module.exports = {
    rooms
};