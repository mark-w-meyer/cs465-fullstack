const express = require('express');
const router = express.Router();
const ctrlTravel= require('../controllers/travel');

/* GET home page.
/ '.travelList' corresponds with the export from app_server > controllers > travel.js
*/
router.get('/', ctrlTravel.travelList);

module.exports = router;
