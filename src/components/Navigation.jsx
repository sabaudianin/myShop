import { useEffect, useState } from "react";
import { Link as RouterLink, NavLink } from "react-router-dom";
// import { fetchCategories } from "../../api/products.js";
import { useColorMode } from "../context/ColorProvider.jsx";

import { SunIcon, MoonIcon } from "@heroicons/react/solid";

export const Navigation = () => {
  const { theme, toggleTheme } = useColorMode();
  const [categories, setCategories] = useState([]);

  // const fetchData = async () => {
  // 	const data = await fetchCategories();
  // 	setCategories(data);
  // };

  // useEffect(() => {
  // 	fetchData();
  // }, []);

  return (
    <nav className=" w-full bg-gray-100 dark:bg-gray-800 mb-4">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        <RouterLink
          to="/"
          className="flex items-center text-xl font-bold text-gray-900 dark:text-white"
        >
          MySzop
        </RouterLink>

        <div className="flex items-center space-x-4">
          {categories.map(({ id, name }) => (
            <NavLink
              key={id}
              to={`/category/${id}`}
              className={({ isActive }) =>
                `text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white ${
                  isActive ? "font-bold text-gray-900 dark:text-white" : ""
                }`
              }
            >
              {name}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center">
          <RouterLink
            to="/login"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white mr-4"
          >
            Login
          </RouterLink>
          <button
            onClick={toggleTheme}
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            {theme === "dark" ? (
              <SunIcon className="h-6 w-6" />
            ) : (
              <MoonIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};
