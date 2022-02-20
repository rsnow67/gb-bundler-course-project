export const getCurrentDate = () => {
	let now = new Date();
	now.setMilliseconds(0);
	now = now.toISOString();
	return now;
}