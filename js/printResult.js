const dateCalcResult = document.querySelector('.date-calc-form__result');
const timerResult = document.querySelector('.timer-form__result');

export const printTimerStop = (msg) => {
    timerResult.textContent = msg;
}

export const printCalcResult = ({
    years,
    months,
    days,
}) => {
    dateCalcResult.textContent = `Лет: ${years}, месяцев: ${months}, дней: ${days}`;
}

export const printTimerResult = ({
    years,
    months,
    days,
    hours,
    minutes,
    seconds
}) => {
    timerResult.textContent = `Лет: ${years}, месяцев: ${months}, дней: ${days}, часов: ${hours}, минут: ${minutes}, секунд: ${seconds}`;
}