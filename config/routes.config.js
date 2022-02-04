const express = require('express');
const router = express.Router();

const common = require('../controllers/common.controller');
const celebrities = require('../controllers/celebrities.controller');
const movie = require('..controllers/movie.controller');

// Misc routes
router.get("/", common.home);


// Movies routes



// Celebrities routes
router.get('/celebrities', celebrities.celebList);




module.exports = router;


