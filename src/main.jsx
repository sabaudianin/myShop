import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.jsx";
import { ColorModeProvider } from "./context/ColorProvider.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ColorModeProvider>
			<App />
		</ColorModeProvider>
	</StrictMode>
);
