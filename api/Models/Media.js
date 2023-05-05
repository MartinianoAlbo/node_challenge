const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const actorSchema = new Schema({
  name: String,
  movies: [{ type: Schema.Types.ObjectId, ref: 'Movie' }],
  tvShows: [{ type: Schema.Types.ObjectId, ref: 'TVShow' }]
});

const directorSchema = new Schema({
  name: String,
  movies: [{ type: Schema.Types.ObjectId, ref: 'Movie' }],
  tvEpisodes: [{ type: Schema.Types.ObjectId, ref: 'TVEpisode' }]
});

const movieSchema = new Schema({
  title: String,
  gender: String,
  director: { type: Schema.Types.ObjectId, ref: 'Director' },
  actors: [{ type: Schema.Types.ObjectId, ref: 'Actor' }]
});

const tvEpisodeSchema = new Schema({
  title: String,
  director: { type: Schema.Types.ObjectId, ref: 'Director' },
  actors: [{ type: Schema.Types.ObjectId, ref: 'Actor' }]
});

const tvSeasonSchema = new Schema({
  seasonNumber: Number,
  episodes: [tvEpisodeSchema]
});

const tvShowSchema = new Schema({
  title: String,
  actors: [{ type: Schema.Types.ObjectId, ref: 'Actor' }],
  seasons: [tvSeasonSchema]
});

const Actor = mongoose.model('Actor', actorSchema);
const Director = mongoose.model('Director', directorSchema);
const Movie = mongoose.model('Movie', movieSchema);
const TVEpisode = mongoose.model('TVEpisode', tvEpisodeSchema);
const TVSeason = mongoose.model('TVSeason', tvSeasonSchema);
const TVShow = mongoose.model('TVShow', tvShowSchema);

module.exports = {
  Actor,
  Director,
  Movie,
  TVEpisode,
  TVSeason,
  TVShow
}