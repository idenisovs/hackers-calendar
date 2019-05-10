import Month from './Month';

export default class Calendar {
    constructor(year = (new Date()).getFullYear()) {
        this.year = year;
        this.months = this.makeMonths();
        this.markToday();
    }

    makeMonths() {
        const year = this.year;

        const result = [];

        for (let month = 1; month <= 12; month++) {
            result.push(new Month(year, month))
        }

        return result;
    }

    markToday() {
        const now = new Date();

        const month = this.months[now.getMonth()];
        const day = month.days[now.getDate() - 1];

        day.isToday = true;
    }
}