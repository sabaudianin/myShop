import { useState } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
	return (
		<>
			<div className="h-screen flex items-center justify-center bg-blue-100">
				<h1 className="text-4xl font-bold text-blue-600">
					Hello, Tailwind CSS!
				</h1>
				<h1 className="text-4xl font-bold text-red-600">
					Hello, Tailwind CSS!
				</h1>
			</div>
		</>
	);
}

export default App;
