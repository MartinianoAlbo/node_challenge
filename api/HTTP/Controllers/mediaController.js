const { Movie, TVShow, Episode } = require('../../Models/Media');
const { response } = require('express');

// Get movies of DB, filter and sort on demand
const getMovies = async (req, res = response) => {
  try {
    // query parameters
    const { titulo, director } = req.query;

    // Format strings
    const movieTitle = titulo.replace(/-/g, ' ');
    const directorName = director ? director.replace(/-/g, ' ') : null;

    // Find the movie for a title
    const movie = await Movie.findOne({ title: movieTitle }).populate('director');

    // Error for movie not found
    if (!movie) {
      return res.status(404).json({ error: 'The movie not exist' });
    }

    // If the director exists then find the movies
    let moviesByDirector = [];
    if (directorName) {
      moviesByDirector = await Movie.find({ director: movie.director._id });
    }

    // return of movie and director movies (if it exists)
    res.json({ movie, moviesByDirector });

  } catch (error) {
    // errors
    res.status(500).json({ error: error.message });
  }

}

// Add new movies
const newMovie = async(req, res = response) => {
  
  const movie = new Movie(req.body);
  
  try { 
    const movieSaved = await movie.save();
    
    res.json({
      ok: true,
      movieSaved,
    })

    res.sendStatus(201);

  } catch (error) {
   
    res.json({
      error: error
    })
    res.sendStatus(403)
  }
}

const getShow = async(req, res) => {
  try {
    // Url params
    const { showId, episodeId } = req.params;

    // Validate que IDs 
    if (!showId || !episodeId) {
      return res.status(400).json({ error: 'The Show title and number of episode are required' });
    }

    // Find tv program
    const tvShow = await TVShow.findById(showId);

    // return error message if not found program
    if (!tvShow) {
      return res.status(404).json({ error: 'Programa de TV no encontrado' });
    }

    // Find episode 
    const episode = await Episode.findById(episodeId).populate('director');

    // return error message if not found episode
    if (!episode) {
      return res.status(404).json({ error: 'Episodio no encontrado' });
    }

    // episode  formato JSON
    res.json({ episode });
  } catch (error) {
    // Manejar errores
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getMovies,
  newMovie,
  getShow
}