const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { fieldValidator } = require('../api/HTTP/Middleware/fieldValidator');
const { authenticateToken } = require('../api/HTTP/Middleware/tokenValidator');
const { getMovies, newMovie, getShow } = require('../api/HTTP/Controllers/mediaController');

router
  //All endpoints here require token
  .use(authenticateToken)
  // Endpoint to get movies
  .get( '/movies', [ check('title','El titulo es obligatorio').not().isEmpty(), fieldValidator ], getMovies )
  // Endpoint to get TV shows
  .get('/tvshows/:showId/episodes/:episodeId', [ check('title','El titulo es obligatorio').not().isEmpty(), fieldValidator ], getShow )
  // Endpoint to add new Movie
  .post( '/addmovie', [ check('title','El titulo es obligatorio').not().isEmpty(), fieldValidator ], newMovie )


module.exports = router;
