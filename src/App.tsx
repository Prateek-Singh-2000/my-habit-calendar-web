import { useState } from "react";
import "./App.css";

import HabitTracker from "./components/HabitTracker/HabitTracker";
import HabitAdderModal from "./components/HabitAdder/HabitAdder";
import type { Habit, HabitTracking } from "./types";
import {
	formatDate,
	getTomorrow,
	getYesterday,
	getDisplayDate,
} from "./utils/dateUtils";

function App() {
	const [habits, setHabit] = useState<Habit[]>([
		{ id: "1", name: "Drink 8 glasses of water" },
	]);

	// 2. Set state for current user for all days their habits are tracked
	const [habitStorage, setHabitTracking] = useState<HabitTracking>({});

	// 3. State for the currently viewed day (initialized to today)
	const [currentViewedDay, setCurrentViewedDay] = useState<Date>(new Date());

	// 4. State for Habit Adding modal
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	const toggleModalButton = (isOpen: boolean): void => {
		console.log(`Trieggered modal to change to ${isOpen}`);
		setIsModalOpen(isOpen);
	};

	const addHabit = (habitName: string): void => {
		if (habitName.trim() === "") {
			alert("Please Enter valid habit name");
			return;
		}

		const newId: string = `h${habits.length + 1}`;
		const newHabit: Habit = { id: newId, name: habitName };

		setHabit((prev) => [...prev, newHabit]);
		setIsModalOpen(false);
	};

	const toggleHabitStatus = (habitId: string, changedStatus: boolean): void => {
		const currentDate = formatDate(currentViewedDay);

		setHabitTracking((prevStatus) => {
			const currentHabitStatus = habitStorage[currentDate] || {};
			return {
				...prevStatus,
				[currentDate]: {
					...currentHabitStatus,
					[habitId]: changedStatus,
				},
			};
		});
	};

	const setNextDate = (): void => {
		setCurrentViewedDay((prevDay) => getTomorrow(prevDay));
	};

	const setPreviousDate = (): void => {
		setCurrentViewedDay((prevDay) => getYesterday(prevDay));
	};

	const getHabitCompletionStatus = (habitId: string): boolean => {
		const currentDate = formatDate(currentViewedDay);
		return habitStorage[currentDate]?.[habitId] || false;
	};

	return (
		<div className="app-container">
			<h1>Daily Habit Tracker</h1>

			<div className="date-navigation">
				<h2>{getDisplayDate(currentViewedDay)}</h2>
				<button className="forward-date" onClick={setNextDate}>
					Next day
				</button>
				<button className="previous-date" onClick={setPreviousDate}>
					Previous Day
				</button>
			</div>

			<div className="habits-list-container">
				{habits.map((habit) => (
					<HabitTracker
						habitName={habit.name}
						isCompleted={getHabitCompletionStatus(habit.id)}
						onMarkCompleted={() => toggleHabitStatus(habit.id, true)}
						onMarkNotCompleted={() => toggleHabitStatus(habit.id, false)}
					></HabitTracker>
				))}
			</div>

			<button className="add-habit-btn" onClick={() => toggleModalButton(true)}>
				+
			</button>

			<div className="modal-container">
				{isModalOpen && (
					<HabitAdderModal
						habitAddingFunction={addHabit}
						onClose={() => toggleModalButton(false)}
					/>
				)}
			</div>
		</div>
	);
}

export default App;
