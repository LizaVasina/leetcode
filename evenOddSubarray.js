// https://leetcode.com/contest/weekly-contest-352/problems/longest-even-odd-subarray-with-threshold/

var longestAlternatingSubarray = function (nums, threshold) {
    let count = 0;
    let biggestLength = count;
    let prevIsEven;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= threshold) {
            if (count == 0) {
                if (nums[i] % 2 != 0) continue;

                prevIsEven = true;
                count++;
                if (count > biggestLength) biggestLength = count;
            } else {
                const num = nums[i] % 2 === 0;

                if (num !== prevIsEven) {
                    count++;
                    prevIsEven = !prevIsEven;
                    if (count > biggestLength) biggestLength = count;
                } else {
                    count = num === true ? 1 : 0;
                    continue;
                }
            }
        } else {
            count = 0;
        }
    }

    return biggestLength;
};

console.log(longestAlternatingSubarray([3, 2, 5, 4], 5)); // 3
console.log(longestAlternatingSubarray([1, 2], 2)); // 1
console.log(longestAlternatingSubarray([2, 3, 4, 5], 4)); // 3 
console.log(longestAlternatingSubarray([2, 3, 4, 5, 2, 3, 2, 4], 5)); // 7
console.log(longestAlternatingSubarray([4, 10, 3], 10)); // 2
console.log(longestAlternatingSubarray([4, 3, 1], 4)); // 2