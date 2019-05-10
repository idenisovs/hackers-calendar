import Day from './Day';

export default class Month {
    constructor(year, month) {
        this.year = year;
        this.month = month;
        this.days = this.makeDays();
    }

    makeDays() {
        const startDate = new Date(this.year, this.month, 0);
        const daysInMonth = startDate.getDate();
        const result = [];

        for (let day = 1; day <= daysInMonth; day++) {
            result.push(new Day(this.year, this.month, day));
        }

        return result;
    }
};