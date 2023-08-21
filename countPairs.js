// https://leetcode.com/contest/biweekly-contest-111/problems/count-pairs-whose-sum-is-less-than-target/

var countPairs = function (nums, target) {
    let count = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        const pairs = nums.filter((num, j) => i < j && (num + nums[i] < target));
        count += pairs.length;
    }

    return count;
};

console.log(countPairs([-1, 1, 2, 3, 1], 2)); // 3
console.log(countPairs([-6, 2, 5, -2, -7, -1, 3], -2)); // 10
console.log(countPairs([], -2)); // 0