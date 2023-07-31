// https://leetcode.com/contest/weekly-contest-356/problems/count-complete-subarrays-in-an-array/

var countCompleteSubarrays = function (nums) {
    const uniques = new Set(nums);
    let count = 1;

    for (let size = nums.length - 1; size >= uniques.size; size--) {
        for (let i = 0; i < nums.length; i++) {
            const curr = nums.slice(i, size + i);

            if (curr.length !== size) break;

            const isComplete = [...uniques].every(num => curr.includes(num));
            if (isComplete) count++;
        }
    }

    return count;
};

console.log(countCompleteSubarrays([1, 3, 1, 2, 2])); // 4
console.log(countCompleteSubarrays([5, 5, 5, 5])); // 10
console.log(countCompleteSubarrays([5, 5, 5, 4])); // 3