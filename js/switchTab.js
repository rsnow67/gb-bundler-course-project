import {
	initCalc
} from "./initCalc.js";
import {
	initTimer
} from "./initTimer.js";

export const showBlock = (name) => {
	const element = document.querySelector(`.${name}`);

	element.style.display = 'block';
}

export const clearPage = (names) => {
	names.forEach((name) => {
		const element = document.querySelector(`.${name}`);
		element.style.display = 'none';
	})
}

export const switchTab = (name) => {
	if (name === 'timer') {
		clearPage(['date-calc', 'timer']);
		showBlock('timer');
		initTimer();
	}

	if (name === 'date-calc') {
		clearPage(['date-calc', 'timer']);
		showBlock('date-calc');
		initCalc();
	}
}