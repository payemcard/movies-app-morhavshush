import {PayloadAction, createSlice, Slice} from "@reduxjs/toolkit";
import {Movie} from "../../models/interfaces";

export interface MoviesState {
  movies: Movie[] | null;
}

const initialState: MoviesState = {
  movies: null,
};

export const moviesSlice: Slice<MoviesState> = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies: (state, action: PayloadAction<Movie[]>) => {
      state.movies = action.payload;
    },
    updateWatchedMovies: (state, action: PayloadAction<string>) => {
      if (state.movies === null) return;
      state.movies = state.movies.map((movie) => {
        if (movie.id === action.payload) {
          return {
            ...movie,
            watched: !movie.watched,
          };
        }
        return movie;
      });
    },
  },
});

export const {setMovies, updateWatchedMovies} = moviesSlice.actions;

export const moviesReducer: typeof moviesSlice.reducer = moviesSlice.reducer;

export default moviesReducer;
