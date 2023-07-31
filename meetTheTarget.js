// https://leetcode.com/contest/weekly-contest-356/problems/number-of-employees-who-met-the-target/

var numberOfEmployeesWhoMetTarget = function (hours, target) {
    return hours.filter(empl => empl >= target).length;
};

console.log(numberOfEmployeesWhoMetTarget([0, 1, 2, 3, 4], 2)); // 3
console.log(numberOfEmployeesWhoMetTarget([5, 1, 4, 2, 2], 6)); // 0