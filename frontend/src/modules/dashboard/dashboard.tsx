import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Movie} from "../../models/interfaces";
import MiniCard from "./components/mini-card";
import FullCard from "./components/full-card";
import {useGetAllMovies} from "../queries/dashboard/dashboard.query";
import Loader from "../../ui-elements/loader";
import Tabs from "./components/tabs";
import {RootState} from "../../store/store";
import {setMovies} from "../../store/movies/movies";

const Dashboard = () => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [selectedGenre, setSelectedGenre] = useState<string>("All");
  const [allGenres, setAllGenres] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const {movies} = useSelector((state: RootState) => state.movies);
  const dispatch = useDispatch();

  const {data, isLoading} = useGetAllMovies();

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMovie(null);
  };

  useEffect(() => {
    const movies =
      selectedGenre === "All"
        ? data
        : data?.filter((movie: any) => movie.genre === selectedGenre);
    dispatch(setMovies(movies));
  }, [selectedGenre]);

  useEffect(() => {
    if (data) {
      dispatch(setMovies(data));
      const genres = [
        "All",
        ...(data?.map((movie: Movie) => movie.genre) || []),
      ];
      const uniqueGenres = Array.from(new Set(genres)) as string[];
      setAllGenres(uniqueGenres);
    }
  }, [data]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="movies ">
      <h1 className="text-4xl font-bold py-8 text-center text-white">
        Movies List
      </h1>
      <Tabs
        tabs={allGenres}
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
      />
      {movies && (
        <div className="movies-container flex justify-center flex-wrap gap-8 pb-10 md:mx-24">
          {movies?.map((movie: Movie) => (
            <MiniCard
              key={movie.id}
              movie={movie}
              onClick={() => {
                setSelectedMovie(movie);
                setIsModalOpen(true);
              }}
            />
          ))}
        </div>
      )}
      {selectedMovie && isModalOpen && (
        <FullCard
          movie={selectedMovie}
          isModalOpen={isModalOpen}
          handleClose={handleCloseModal}
          handleCancel={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Dashboard;
