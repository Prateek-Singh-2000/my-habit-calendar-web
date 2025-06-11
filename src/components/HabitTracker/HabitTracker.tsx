import "./HabitTracker.css";
import type { HabitTrackerProps } from "../../types";

function HabitTracker({
	habitName,
	isCompleted,
	onMarkCompleted,
	onMarkNotCompleted,
	onRemove,
	habitId,
}: HabitTrackerProps) {
	return (
		<div className="habit-card">
			<div className="habit-info">
				<h2>{habitName}</h2>
				<div
					className={`status-indicator ${isCompleted ? "completed" : "not-completed"}`}
				></div>
				<button
					className="remove-habit-button"
					onClick={() => onRemove(habitId)}
				>
					x
				</button>
			</div>
			<div className="action-buttons">
				<button onClick={onMarkCompleted}>Mark as Completed</button>
				<button onClick={onMarkNotCompleted}>Mark as Not Completed</button>
			</div>
		</div>
	);
}

export default HabitTracker;
