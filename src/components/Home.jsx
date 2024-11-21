import { useState, useEffect, useCallback } from "react";
import { fetchCategories } from "../api/products";
import { Hero } from "../components/Hero";
import { ProductCard } from "../components/ProductCard";

export const Home = () => {
  const [categories, setCategories] = useState([]);

  const loadCategories = useCallback(async () => {
    const fetchedCategories = await fetchCategories({
      embedProducts: true,
      limitProducts: 4,
    });
    setCategories(fetchedCategories);
  }, []);

  useEffect(() => {
    loadCategories();
  }, [loadCategories]);

  return (
    <>
      <Hero />
      {!categories.length ? (
        <div className="flex justify-center mt-8">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
        </div>
      ) : (
        categories.map((category) => (
          <div
            key={category.id}
            className="mt-12"
          >
            <h2 className="text-2xl font-semibold mb-4">{category.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {category.products.map((product) => (
                <ProductCard
                  key={product.id}
                  {...product}
                />
              ))}
            </div>
          </div>
        ))
      )}
    </>
  );
};
