import Day from './Day';

export default class Month {
    constructor(year, month) {
        this.year = year;
        this.month = month;
        this.days = this.makeDays();
        this.weeks = this.makeWeeks();
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

    makeWeeks() {
        const weeks = [
            []
        ];

        let currentDay, currentWeek = weeks[0];

        for (let idx = 0; idx < this.days.length; idx++) {
            currentDay = this.days[idx];

            if (currentDay.weekDay === 1) {
                currentWeek = [];
                weeks.push(currentWeek);
            }

            currentWeek.push(currentDay);
        }

        this.prependMissingDays(weeks);
        this.appendMissingDays(weeks);

        return weeks;
    }

    prependMissingDays(weeks) {
        const missingDaysCount = this.findPrependDays();
        const missingDays = new Array(missingDaysCount).fill(null);

        const firstWeek = weeks[0];

        weeks[0] = missingDays.concat(firstWeek);
    }

    appendMissingDays(weeks) {
        const lastWeekIdx = weeks.length - 1;

        const missingDaysCount = this.findAppendDays();
        const missingDays = new Array(missingDaysCount).fill(null);

        const lastWeek = weeks[lastWeekIdx];

        weeks[lastWeekIdx] = lastWeek.concat(missingDays);
    }

    findPrependDays() {
        const firstDay = this.days[0];

        return firstDay.weekDay - 1;

    }

    findAppendDays() {
        const lastDay = this.days[this.days.length - 1];

        return 7 - lastDay.weekDay;
    }
};