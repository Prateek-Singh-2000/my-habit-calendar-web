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
