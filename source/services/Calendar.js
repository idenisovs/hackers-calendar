export default class Calendar {
    constructor(year = (new Date()).getFullYear()) {
        this.year = year;

        console.log(this.year);
    }
}