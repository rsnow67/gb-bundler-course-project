import {
    DateTime
} from 'https://moment.github.io/luxon/es6/luxon.min.js';

let sound = new Howl({
    src: '../media/the-chemist-timer-bomb.mp3'
});

export const getDateDiff = (dateFrom, dateTo, type) => {
    if (dateFrom < dateTo) {
        [dateFrom, dateTo] = [dateTo, dateFrom]
    }

    const dateFromObject = DateTime.fromISO(dateFrom);
    const dateToObject = DateTime.fromISO(dateTo);

    if (type === 'calc') {
        return dateFromObject.diff(dateToObject, ['years', 'months', 'days']).toObject();
    }

    if (type === 'timer') {
        if ((dateFromObject - dateToObject) === 22000) {
            sound.play();
            return dateFromObject.diff(dateToObject, ['years', 'months', 'days', 'hours', 'minutes', 'seconds']).toObject();
        }

        if ((dateFromObject - dateToObject) <= 0) {
            return false;
        }
    }
    return dateFromObject.diff(dateToObject, ['years', 'months', 'days', 'hours', 'minutes', 'seconds']).toObject();
}