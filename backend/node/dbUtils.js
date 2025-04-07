const fs = require("fs");
const dbPath = "./db.json";

function loadMovies() {
  return JSON.parse(fs.readFileSync(dbPath));
}

function updateMovieWatched(movieId) {
  const movies = loadMovies();
  const movie = movies.find((m) => m.id === movieId);

  if (!movie) {
    throw new Error(`Movie with ID ${movieId} not found`);
  }

  movie.watched = !movie.watched; // Toggle the watched status
  fs.writeFileSync(dbPath, JSON.stringify(movies, null, 2));
  return movie;
}

module.exports = {loadMovies, updateMovieWatched};
