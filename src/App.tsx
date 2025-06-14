import React from "react";
import { Routes, Route } from "react-router-dom";
import DailyHabitsPage from "./pages/DailyHabitsPage/DailyHabitsPage";
import "./App.css";

function App() {
	return (
		<div className="app-container">
			<Routes>
				<Route path="/" element={<DailyHabitsPage />} />
				<Route path="*" element={<h2>404 - Page Not Found</h2>} />
			</Routes>
		</div>
	);
}

export default App;
