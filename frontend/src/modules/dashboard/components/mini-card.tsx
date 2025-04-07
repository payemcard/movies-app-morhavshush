import Img from "../../../ui-elements/img";
import {Movie} from "../../../models/interfaces";

interface MiniCardProps {
  movie: Movie;
  onClick: () => void;
}

const MiniCard = ({movie, onClick}: MiniCardProps) => {
  return (
    <div
      className="border-2 border-solid border-gray-400 rounded-2xl p-4 w-[18rem] cursor-pointer bg-gray-300"
      onClick={onClick}
    >
      <h2 className="text-xl font-bold pb-4">{movie.name}</h2>
      <Img
        src={movie.thumbnail}
        alt={movie.name}
        className="rounded-2xl h-[18rem] w-full"
      />
    </div>
  );
};

export default MiniCard;
