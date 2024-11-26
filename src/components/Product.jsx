import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../api/products";
import { FavouriteButton } from "../components/FavoriteButton";

export const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const loadProduct = async () => {
      const fetchedProduct = await fetchProduct(id);
      setProduct(fetchedProduct);
    };
    loadProduct();
  }, [id]);

  if (!product) {
    return (
      <div className="flex justify-center mt-12">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="my-8">
      <div className="flex flex-col sm:flex-row gap-8">
        <div className="relative flex-shrink-0 w-full max-w-sm sm:max-w-xs">
          <img
            src={`/${product.image}`}
            alt={product.name}
            className="w-full max-h-[500px] object-cover rounded"
          />
          <FavouriteButton />
        </div>
        <div>
          <h1 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
            {product.title}
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-300 mb-4">
            {product.description}
          </p>
          <p className="text-2xl font-medium text-gray-900 dark:text-white mb-4">
            ${Number(product.price).toFixed(2)}
          </p>
          <button className="px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded hover:bg-blue-700 dark:hover:bg-blue-600 transition duration-300">
            Dodaj do koszyka
          </button>
        </div>
      </div>
    </div>
  );
};
