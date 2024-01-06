// https://leetcode.com/contest/biweekly-contest-116/problems/subarrays-distinct-element-sum-of-squares-i/

var sumCounts = function (nums) {
    let res = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length - i; j++) {
            const subArray = nums.slice(i, j + i + 1);
            const set = new Set(subArray);

            res += set.size * set.size;
        }
    }

    return res;
};

function getSubArrays(arr) {
    const subArrays = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            const subArray = arr.slice(i, j + i + 1);
            subArrays.push(subArray);
        }
    }

    return subArrays
}

console.log(sumCounts([1, 2, 1])); // 15
console.log(sumCounts([1, 1])); // 3

// console.log(getSubArrays([1, 2, 1])); // 15
// console.log(getSubArrays([1, 2, 3, 4, 5])); // 15