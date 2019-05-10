import Month from './Month';

export default class Calendar {
    constructor(year = (new Date()).getFullYear()) {
        this.year = year;
        this.months = this.makeMonths(year);
    }

    makeMonths(year) {
        const result = [];

        for (let month = 1; month <= 12; month++) {
            result.push(new Month(year, month))
        }

        return result;
    }
}