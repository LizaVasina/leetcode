// https://leetcode.com/contest/weekly-contest-360/problems/find-the-minimum-possible-sum-of-a-beautiful-array/

var minimumPossibleSum = function (n, target) {
    const arr = [];

    for (let i = 1; arr.length < n; i++) {
        if (!arr.includes(target - i)) arr.push(i);
    }

    return arr.reduce((acc, curr) => acc += curr, 0);
};

console.log(minimumPossibleSum(2, 3)); // 4
console.log(minimumPossibleSum(3, 3)); // 8
console.log(minimumPossibleSum(1, 1)); // 1
console.log(minimumPossibleSum(8, 5)); // 48
