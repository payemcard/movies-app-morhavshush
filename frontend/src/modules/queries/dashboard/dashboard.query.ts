import {useMutation, useQuery} from "@tanstack/react-query";
import {
  getAllGenres,
  getAllMovies,
  getMovieById,
  getMoviesByGenre,
  updateWatchedStatus,
} from "../../repositories/dashboard/dashboard.repository";

export const useGetAllMovies = () => {
  return useQuery({
    queryKey: ["movies"],
    queryFn: getAllMovies,
  });
};

export const useGetAllGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: getAllGenres,
  });
};

export const useGetMoviesByGenre = (selectedGenre: string) => {
  return useQuery({
    queryKey: ["movies-by-genre"],
    queryFn: () => getMoviesByGenre(selectedGenre),
  });
};

export const useGetMovieById = (movieId: string) => {
  return useQuery({
    queryKey: ["movie"],
    queryFn: () => getMovieById(movieId),
  });
};

export const useUpdateWatchedStatus = (movieId: string) => {
  return useMutation({
    mutationKey: ["update-watched-status"],
    mutationFn: () => updateWatchedStatus(movieId).then((res) => res.data),
  });
};
