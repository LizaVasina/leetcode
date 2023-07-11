// https://leetcode.com/problems/majority-element/

var majorityElement = function(nums) {
    const goal = Math.floor(nums.length / 2);

    const frequency = nums.reduce((acc, curr) => {
        return acc[curr] ? acc[curr]++ : acc[curr] = 1, acc
    }, {});

    return Object.keys(frequency).find(num => frequency[num] > goal);
};

console.log(majorityElement([3,2,3])); // 3
console.log(majorityElement([2,2,1,1,1,2,2])); // 2