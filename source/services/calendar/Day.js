export default class Day {
    constructor(year, month, day, isToday = false) {
        this.year = year;
        this.month = month;
        this.day = day;
        this.date = new Date(Date.UTC(year, month-1, day));
        this.weekDay = this.getWeekDay(this.date);
        this.isToday = isToday;
    }

    getWeekDay(date) {
        let weekDay = date.getDay();

        if (weekDay === 0) {
            weekDay = 7;
        }

        return weekDay;
    }
}