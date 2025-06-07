export const formatDate = (date: Date): string => {
	const year = date.getFullYear();
	const month = (date.getMonth() + 1).toString().padStart(2, "0");
	const day = date.getDate().toString().padStart(2, "0");
	return `${year}-${month}-${day}`;
};

export const parseDate = (inputDate: string): Date => {
	const [year, month, day] = inputDate.split("-").map(Number);
	return new Date(year, month - 1, day);
};

export const getTomorrow = (date: Date): Date => {
	const tomorrow = new Date(date);
	tomorrow.setDate(date.getDate() + 1);
	return tomorrow;
};

export const getYesterday = (date: Date): Date => {
	const yesterday = new Date(date);
	yesterday.setDate(date.getDate() - 1);
	return yesterday;
};

export const getDisplayDate = (date: Date): string => {
	const options: Intl.DateTimeFormatOptions = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	};
	return date.toLocaleDateString(undefined, options);
};
