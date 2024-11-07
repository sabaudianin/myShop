import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation";

export const App = () => {
	return (
		<>
			<BrowserRouter>
				<Navigation />
			</BrowserRouter>
		</>
	);
};
