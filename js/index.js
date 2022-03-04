import "../css/reset.css";
import "../css/style.css";
import {
    clearPage
} from "./switchTab.js";
import {
    switchTab
} from "./switchTab.js";

const elements = ['date-calc', 'timer'];
clearPage(elements);

const timerButton = document.querySelector('.timer-button');
const dateCalcButton = document.querySelector('.date-calc-button');

timerButton.addEventListener('click', () => {
    switchTab('timer');
});
dateCalcButton.addEventListener('click', () => {
    switchTab('date-calc');
});