import { Link } from "react-router-dom";
import { FavouriteButton } from "../favourite-button";

export const ProductCard = ({ id, image, title, description, price }) => {
  return (
    <div className="relative bg-white shadow-md rounded-lg overflow-hidden flex flex-col">
      <Link
        to={`/product/${id}`}
        className="block"
      >
        <img
          src={`/products/${image}`}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h5 className="text-lg font-semibold mb-2">{title}</h5>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </Link>
      <div className="flex-grow" />
      <div className="flex items-center justify-between p-4 border-t border-gray-200">
        <span className="text-lg font-medium">${Number(price).toFixed(2)}</span>
        <div className="flex items-center space-x-2">
          <FavouriteButton />
          <button className="px-3 py-1 text-sm font-medium text-blue-500 border border-blue-500 rounded hover:bg-blue-50">
            Dodaj do koszyka
          </button>
        </div>
      </div>
    </div>
  );
};
