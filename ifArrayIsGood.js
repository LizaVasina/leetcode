// https://leetcode.com/contest/biweekly-contest-109/problems/check-if-array-is-good/

var isGood = function (nums) {
    const set = new Set(nums);
    const length = nums.length;

    if (set.size !== length - 1) return false;

    const sorted = nums.sort((a, b) => a - b);

    if (sorted[length - 1] === sorted[length - 2]) {
        return sorted[length - 1] == length - 1 ? true : false;
    }

    return false;
};

console.log(isGood([3, 4, 4, 1, 2, 1])); // false
console.log(isGood([1, 1])); // true
console.log(isGood([1, 3, 3, 2])); // true
console.log(isGood([2, 1, 3])); // false
console.log(isGood([2, 1, 3, 4])); // false
console.log(isGood([9, 9])); // false
console.log(isGood([14, 2, 2])); // false
