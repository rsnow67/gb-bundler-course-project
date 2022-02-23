import {
	printCalcResult,
} from './printResult.js';
import {
	getDateDiff
} from './getDateDiff.js';

export const initCalc = () => {
	const calcForm = document.querySelector('.date-calc-form');

	calcForm.onsubmit = (event) => {
		event.preventDefault();

		const formData = new FormData(event.target);

		let dateFrom = formData.get('firstDate');
		let dateTo = formData.get('secondDate');

		const dateDiff = getDateDiff(dateFrom, dateTo, 'calc');
		printCalcResult(dateDiff);
	}
}