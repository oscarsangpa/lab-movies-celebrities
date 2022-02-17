const express = require('express');
const router = express.Router();

const celebrities = require('../controllers/celebrities.controller');
const movies = require('../controllers/movie.controller');



// Celebrities routes
router.get('/celebrities/new', celebrities.create)
router.get('/celebrities', celebrities.list)
router.post('/celebrities', celebrities.doCreate)

// Movies routes
router.get('/movies', movies.list);
router.get('/movies/new', movies.create);
router.post('/movies', movies.doCreate);
router.get('/movies/:id', movies.detail);
router.post('/movies/:id/delete', movies.delete);

// Home route
router.get('/', (req, res) => {
  res.render('home', { title: 'Celebrities' })
})


module.exports = router;


