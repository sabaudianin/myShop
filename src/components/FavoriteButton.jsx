import { useState } from "react";
import { StarIcon, StarBorderIcon } from "@heroicons/react/solid";

export const FavouriteButton = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <button
      onClick={handleFavorite}
      className="absolute top-1 right-1 m-1 text-white bg-opacity-20 backdrop-blur-sm rounded-full p-1 hover:bg-opacity-30 transition duration-200"
    >
      {isFavorite ? (
        <StarIcon className="w-5 h-5 text-yellow-400" />
      ) : (
        <StarBorderIcon className="w-5 h-5 text-white" />
      )}
    </button>
  );
};
