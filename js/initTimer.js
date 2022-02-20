import {
	printTimerResult,
	printTimerStop
} from './printResult.js';
import {
	getDateDiff
} from './getDateDiff.js';
import {
	getCurrentDate
} from './getCurrentDate.js';

export const initTimer = () => {
	const timerForm = document.querySelector('.timer-form');
	const stopButton = document.querySelector('.timer-form__stop-button');

	stopButton.addEventListener('click', () => {
		clearTimeout(timerId);
	})

	let timerId = null;
	let flag = true;

	const updateCounter = (deadline) => {
		const now = getCurrentDate();

		if (deadline < now) {
			flag = false;
			printTimerStop('Таймер истёк.');
			clearTimeout(timerId);
		} else {
			flag = true;
			const dateDiff = getDateDiff(now, deadline, 'timer');

			if (!dateDiff) {
				clearTimeout(timerId);
				printTimerStop('Таймер истёк.');
			} else {
				printTimerResult(dateDiff);
			}
		}
	}

	timerForm.onsubmit = (event) => {
		event.preventDefault();

		const timerDate = new FormData(event.target).get('timerDate');
		const timerTime = new FormData(event.target).get('timerTime');
		const deadline = `${timerDate}T${timerTime}`;

		updateCounter(deadline);

		if (flag) {
			timerId = setInterval(() => {
				updateCounter(deadline);
			}, 1000);
		}
	}
}