import apiClient from "../api.client";

export const getAllMovies = async (): Promise<any> => {
  return apiClient({
    method: "get",
    url: "/api/movies",
  }).then((res) => res?.data);
};

export const getAllGenres = async (): Promise<any> => {
  return apiClient({
    method: "get",
    url: "/api/movies/getAllGenres",
  }).then((res) => res?.data);
};

export const getMoviesByGenre = async (genre: string): Promise<any> => {
  return apiClient({
    method: "get",
    url: `/api/movies/genre/${genre}`,
  }).then((res) => res?.data);
};

export const getMovieById = async (movieId: string): Promise<any> => {
  return apiClient({
    method: "get",
    url: `/api/movie/${movieId}`,
  }).then((res) => res?.data);
};

export const updateWatchedStatus = async (movieId: string): Promise<any> => {
  return apiClient({
    method: "post",
    url: `/api/movies/watched/${movieId}`,
  }).then((res) => res?.data);
};
