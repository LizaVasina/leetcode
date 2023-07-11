// https://leetcode.com/problems/day-of-the-week/

var dayOfTheWeek = function(day, month, year) {
    const arrOfDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    // months have indexes 0 - 11
    const date = new Date(year, month - 1, day);

    return arrOfDays[ date.getDay() ];
};

console.log('31.08.2019', dayOfTheWeek(31, 8, 2019)); // Saturday
console.log('18.07.1999', dayOfTheWeek(18, 7, 1999)); // Sunday
console.log('15.08.1993', dayOfTheWeek(15, 8, 1993)); // Sunday