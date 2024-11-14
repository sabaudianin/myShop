import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductCard } from "../../components/ProductCard";
import { fetchProducts } from "../../api/products.js";

export const Category = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadCategories = async () => {
      const fetchedCategories = await fetchProducts({ categoryId: id });
      setProducts(fetchedCategories);
    };
    loadCategories();
  }, [id]);

  return (
    <>
      {!products.length ? (
        <div className="flex justify-center mt-8">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">
            {products[0]?.category?.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
