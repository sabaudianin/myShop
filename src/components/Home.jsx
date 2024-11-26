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
      <section className="container mx-auto px-4 mt-12">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Kategorie produktów
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white dark:bg-gray-600 rounded-lg shadow-md p-4 flex flex-col items-center"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {category.name}
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {category.products.map((product) => (
                  <ProductCard
                    key={product.id}
                    {...product}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
