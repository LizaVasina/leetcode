// https://leetcode.com/contest/biweekly-contest-113/problems/minimum-right-shifts-to-sort-the-array/

var minimumRightShifts = function (nums) {
    const sorted = nums.slice().sort((a, b) => a - b);
    let count = 0;

    const max = Math.max(...nums);
    while (nums.indexOf(max) !== (nums.length - 1)) {
        nums.unshift(nums.pop());
        count++;
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== sorted[i]) return -1;
    }

    return count;
};

console.log(minimumRightShifts([3, 4, 5, 1, 2])); // 2
console.log(minimumRightShifts([1, 3, 5])); // 0
console.log(minimumRightShifts([2, 1, 4])); // -1