// https://leetcode.com/contest/biweekly-contest-112/problems/maximum-sum-of-almost-unique-subarray/

var maxSum = function (nums, m, k) {
    let maxSum = 0;
    let tempSum = 0;
    let map = new Map();

    for (let i = 0; i < k; i++) {
        tempSum += nums[i];

        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1);
        }
    }

    if ([...map.values()].length >= m) maxSum = tempSum;

    for (let i = k; i < nums.length; i++) {
        tempSum = tempSum - nums[i - k] + nums[i];

        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1);
        }

        if (map.has(nums[i - k])) {
            if (map.get(nums[i - k]) == 1) {
                map.delete(nums[i - k]);
            } else {
                map.set(nums[i - k], map.get(nums[i - k]) - 1);
            }
        }

        if ([...map.values()].length >= m && tempSum > maxSum) maxSum = tempSum;

        console.log(tempSum, map)
    }

    return maxSum;
};

console.log(maxSum([2, 6, 7, 3, 1, 7], 3, 4)); // 18
console.log(maxSum([5, 9, 9, 2, 4, 5, 4], 1, 3)); // 23
console.log(maxSum([1, 2, 1, 2, 1, 2, 1], 3, 3)); // 0
console.log(maxSum([1, 1, 1, 2], 2, 4)); // 5
console.log(maxSum([5, 9, 9, 2, 4, 5, 4], 1, 3)); // 23
console.log(maxSum([5, 4, 8, 4, 8, 10, 10], 3, 3)); // 22