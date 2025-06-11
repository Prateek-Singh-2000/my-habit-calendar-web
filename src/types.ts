export interface Habit {
	id: string;
	name: string;
}

export interface DailyCompletion {
	[habitId: string]: boolean;
}

export interface HabitTracking {
	[dateId: string]: DailyCompletion;
}

export interface HabitTrackerProps {
	habitName: string;
	isCompleted: boolean;
	onMarkCompleted: () => void;
	onMarkNotCompleted: () => void;
	onRemove: (habitId: string) => void;
	habitId: string;
}
