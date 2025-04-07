import {useState} from "react";
import {Button} from "../../../ui-elements/button";
import Img from "../../../ui-elements/img";
import Popup from "../../../ui-elements/pop-up";
import {Movie} from "../../../models/interfaces";
import {useUpdateWatchedStatus} from "../../queries/dashboard/dashboard.query";
import Loader from "../../../ui-elements/loader";
import {updateWatchedMovies} from "../../../store/movies/movies";
import {useDispatch} from "react-redux";
import {CustomTooltip} from "../../../ui-elements/tool-tip";

interface FullCardProps {
  movie: Movie;
  isModalOpen: boolean;
  handleCancel?: () => void;
  handleClose?: () => void;
}

const FullCard = ({
  movie,
  isModalOpen,
  handleCancel,
  handleClose,
}: FullCardProps) => {
  const [isWatched, setIsWatched] = useState<boolean>(movie?.watched ?? false);
  const {mutate} = useUpdateWatchedStatus(movie?.id);
  const dispatch = useDispatch();

  const handleClickWatched = () => {
    setIsWatched(!isWatched);
    mutate();
    dispatch(updateWatchedMovies(movie?.id));
  };

  const renderStars = (rating: number = 0) => {
    return (
      <div className="flex justify-center gap-1 text-yellow-400 text-2xl">
        {Array.from({length: 5}, (_, i) => (
          <span key={i}>{i < rating && "⭐️"}</span>
        ))}
      </div>
    );
  };

  return (
    <div>
      <Popup
        isModalOpen={isModalOpen}
        hideXButton
        className="h-auto p-4 w-[90%] text-center md:w-[35rem]"
        closeModal={handleCancel}
        classNameOverlay="flex items-center justify-center"
        shouldCloseOnOverlayClick={true}
      >
        {false ? (
          <div className="flex items-center justify-center h-[50vh]">
            <Loader />
          </div>
        ) : (
          <div
            className={`grid justify-items-center gap-4 h-5/6 w-full text-white ${
              !movie?.thumbnail && "pt-4"
            }`}
          >
            <Img
              src={movie?.thumbnail}
              alt={movie?.name}
              className="rounded-2xl h-[18rem] w-[16rem]"
            />
            <Img
              className="absolute top-6 left-6 cursor-pointer"
              src="/assets/svg/x-circle.svg"
              alt="x-icon"
              onClick={handleCancel}
            />
            <h1 className="text-2xl font-bold" dir="ltr">
              {movie?.name}
            </h1>
            {renderStars(movie?.rating)}
            <div className="w-[80%]" dir="ltr">
              {movie?.genre}
            </div>
            {movie?.imdb_url && (
              <div className="flex flex-col items-center w-full">
                <Button
                  variant="primary"
                  className="w-[60%]"
                  onClick={() => {
                    handleClose && handleClose();
                    window.open(movie?.imdb_url, "_blank");
                  }}
                >
                  Watch Now
                </Button>
              </div>
            )}
            <CustomTooltip
              contentText={isWatched ? "Watched" : "Unwatched"}
              className="absolute bottom-6 left-6 cursor-pointer w-10"
              svg={isWatched ? "watch-movie" : "non-watch-movie"}
              onClick={() => {
                handleClickWatched();
              }}
            />
          </div>
        )}
      </Popup>
    </div>
  );
};

export default FullCard;
