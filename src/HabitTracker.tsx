import "./HabitTracker.css";

interface HabitTrackerProps {
	habitName: string;
	isCompleted: boolean;
	onMarkCompleted: () => void;
	onMarkNotCompleted: () => void;
}

function HabitTracker({
	habitName,
	isCompleted,
	onMarkCompleted,
	onMarkNotCompleted,
}: HabitTrackerProps) {
	return (
		<div className="habit-card">
			<div className="habit-info">
				<h2>{habitName}</h2>
				<div
					className={`status-indicator ${isCompleted ? "completed" : "not-completed"}`}
				></div>
			</div>
			<div className="action-buttons">
				<button onClick={onMarkCompleted}>Mark as Completed</button>
				<button onClick={onMarkNotCompleted}>Mark as Not Completed</button>
			</div>
		</div>
	);
}

export default HabitTracker;
