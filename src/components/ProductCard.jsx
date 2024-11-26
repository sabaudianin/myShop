import { Link } from "react-router-dom";
import { FavouriteButton } from "./FavoriteButton";

export const ProductCard = ({ id, image, title, description, price }) => {
  return (
    <div className="relative bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden flex flex-col">
      <Link
        to={`/product/${id}`}
        className="block"
      >
        <img
          src={`/${image}`}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h5 className="text-lg font-semibold mb-2 dark:text-white">
            {title}
          </h5>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {description}
          </p>
        </div>
      </Link>
      <div className="flex-grow" />
      <div className="flex items-center justify-between p-4 border-t border-gray-200 dark:border-gray-700">
        <span className="text-lg font-medium text-gray-900 dark:text-white">
          ${Number(price).toFixed(2)}
        </span>
        <div className="flex items-center space-x-2">
          <FavouriteButton />
          <button className="px-3 py-1 text-sm font-medium text-blue-500 dark:text-blue-300 border border-blue-500 dark:border-blue-300 rounded hover:bg-blue-50">
            Dodaj do koszyka
          </button>
        </div>
      </div>
    </div>
  );
};
