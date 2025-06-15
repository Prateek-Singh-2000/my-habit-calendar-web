import { Routes, Route, Link } from "react-router-dom";
import DailyHabitsPage from "./pages/DailyHabitsPage/DailyHabitsPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import "./App.css";

function App() {
	return (
		<>
			<div className="global-nav">
				<Link to="/" className="nav-link">
					Daily Habits
				</Link>
				<Link to="/profile" className="nav-link">
					Profile
				</Link>
			</div>
			<div className="app-container">
				<Routes>
					<Route path="/" element={<DailyHabitsPage />} />
					<Route path="/profile" element={<ProfilePage />} />
					<Route path="*" element={<h2>404 - Page Not Found</h2>} />
				</Routes>
			</div>
		</>
	);
}

export default App;
