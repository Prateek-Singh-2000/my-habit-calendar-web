import { useState } from "react";
import "./App.css";

import HabitTracker from "./HabitTracker";

interface Habit {
	id: string;
	name: string;
	isCompleted: boolean;
}

function App() {
	const [habits, setHabit] = useState<Habit[]>([
		{ id: "1", name: "Drink 8 glasses of water", isCompleted: false },
		{ id: "2", name: "Running a km", isCompleted: false },
		{ id: "3", name: "Programming an app", isCompleted: false },
	]);

	function settingStateHabit(id: string, changedStatusHabit: boolean) {
		setHabit((prevHabits) => {
			// Map over the previous habits array to find and update the specific habit
			return prevHabits.map((habit) =>
				habit.id === id ? { ...habit, isCompleted: changedStatusHabit } : habit,
			);
		});
	}

	return (
		<div className="app-container">
			<h1>Daily Habit Tracker</h1>
			<div className="habits-list-container">
				{habits.map((habit) => (
					<HabitTracker
						key={habit.id}
						habitName={habit.name}
						isCompleted={habit.isCompleted}
						onMarkCompleted={() => settingStateHabit(habit.id, true)}
						onMarkNotCompleted={() => settingStateHabit(habit.id, false)}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
