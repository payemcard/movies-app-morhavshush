const express = require("express");
const cors = require("cors");
const {loadMovies, updateMovieWatched} = require("./dbUtils");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/api/movies", (req, res) => {
  try {
    const movies = loadMovies();
    res.json(movies);
  } catch (error) {
    res.status(500).json({error: "Internal Server Error"});
  }
});

app.get("/api/movies/genre/:genre", (req, res) => {
  try {
    const movies = loadMovies();
    if (req.params.genre === "All" || req.params.genre === "") {
      res.json(movies);
    } else {
      const filteredMovies = movies.filter((m) => m.genre === req.params.genre);
      res.json(filteredMovies);
    }
  } catch (error) {
    res.status(500).json({error: "Internal Server Error"});
  }
});

app.get("/api/movies/getAllGenres", (req, res) => {
  try {
    const movies = loadMovies();
    const genres = new Set();
    genres.add("All");
    movies.forEach((m) => {
      genres.add(m.genre);
    });
    res.json([...genres]);
  } catch (error) {
    res.status(500).json({error: "Internal Server Error"});
  }
});

app.get("/api/movie/:id", (req, res) => {
  try {
    const movies = loadMovies();
    const movie = movies.find((m) => m.id === parseInt(req.params.id));
    if (!movie) {
      console.log("Movie not found");
      return res.status(404).json({error: "Movie not found"});
    }
    res.json(movie);
  } catch (error) {
    res.status(500).json({error: "Internal Server Error"});
  }
});

app.post("/api/movies/watched/:id", (req, res) => {
  try {
    console.log("Toggling watched status of movie with id: " + req.params.id);
    const movieId = parseInt(req.params.id);
    const updatedMovie = updateMovieWatched(movieId);
    res.status(200).json(updatedMovie);
  } catch (error) {
    res.status(500).json({error: "Internal Server Error"});
  }
});

app.listen(4000, () => console.log("Server running on port 4000"));
