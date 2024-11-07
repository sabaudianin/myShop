import { useState, useEffect, useContext, createContext, useMemo } from "react";

const ColorModeContext = createContext();

export const ColorModeProvider = ({ children }) => {
	// Function to get initial theme based on localStorage or system preference
	const getInitialTheme = () => {
		const savedTheme = localStorage.getItem("appTheme");
		if (savedTheme) {
			return savedTheme;
		}

		// Check if the user has a system preference for dark mode
		const prefersDark = window.matchMedia(
			"(prefers-color-scheme: dark)"
		).matches;
		return prefersDark ? "dark" : "light";
	};

	const [theme, setTheme] = useState(getInitialTheme);

	// Function to add or remove the 'dark' class from the root element
	const setDocumentClass = (theme) => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	};

	// Update the document class and localStorage whenever the theme changes
	useEffect(() => {
		setDocumentClass(theme);
		localStorage.setItem("appTheme", theme);
	}, [theme]);

	// Toggle between 'light' and 'dark' themes
	const toggleTheme = () => {
		setTheme((current) => (current === "dark" ? "light" : "dark"));
	};

	const themePreferences = useMemo(
		() => ({
			theme,
			toggleTheme,
		}),
		[theme]
	);

	return (
		<ColorModeContext.Provider value={themePreferences}>
			{children}
		</ColorModeContext.Provider>
	);
};

export const useColorMode = () => useContext(ColorModeContext);
