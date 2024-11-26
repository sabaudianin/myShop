import { useState, useEffect } from "react";
import { Link as RouterLink, NavLink } from "react-router-dom";
import { fetchCategories } from "../api/products.js";
import { useColorMode } from "../context/ColorProvider.jsx";
import { SunIcon, MoonIcon, MenuIcon, XIcon } from "@heroicons/react/solid";

export const Navigation = () => {
  const { theme, toggleTheme } = useColorMode();
  const [categories, setCategories] = useState([]);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const fetchData = async () => {
    const data = await fetchCategories();
    setCategories(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <nav className="w-full bg-gray-100 dark:bg-gray-800 mb-4">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        <RouterLink
          to="/"
          className="flex items-center text-xl font-bold text-gray-900 dark:text-white"
        >
          MySzop
        </RouterLink>

        <div className="hidden md:flex items-center space-x-4">
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

        {/* hamburger menu */}
        <button
          onClick={() => setMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
        >
          {isMenuOpen ? (
            <XIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white ml-4"
        >
          {theme === "dark" ? (
            <SunIcon className="h-6 w-6" />
          ) : (
            <MoonIcon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-100 dark:bg-gray-800 px-4 py-2">
          {categories.map(({ id, name }) => (
            <NavLink
              key={id}
              to={`/category/${id}`}
              className={({ isActive }) =>
                `block py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white ${
                  isActive ? "font-bold text-gray-900 dark:text-white" : ""
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              {name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};
