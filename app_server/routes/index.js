const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/main');

/* GET home page. */
/* The slash in quotes indicates what is needed to visit the home page
/such that ie. '/index' would require you to type localhost:3000/index
/to acquire the home page
*/
router.get('/', ctrlMain.index);

module.exports = router;
