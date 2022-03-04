import {
    DateTime
} from "luxon";
import {
    timerSound
} from "./initTimer.js";

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
        const diff = dateFromObject - dateToObject;

        if (diff <= 10000 && diff > 0) {
            timerSound.play();
            return dateFromObject.diff(dateToObject, ['years', 'months', 'days', 'hours', 'minutes', 'seconds']).toObject();
        }

        if (diff <= 0) {
            timerSound.stop();
            return false;
        }
    }
    return dateFromObject.diff(dateToObject, ['years', 'months', 'days', 'hours', 'minutes', 'seconds']).toObject();
}