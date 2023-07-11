// https://leetcode.com/problems/number-of-good-pairs/

var numIdenticalPairs = function(nums) {
    let counter = 0;
    
    nums.forEach((el, index) => {
        for(let i = index + 1; i < nums.length; i++) {
            if (el === nums[i]) counter++;
        }
    });

    return counter;
};

console.log(numIdenticalPairs([1,2,3,1,1,3])); // 4
console.log(numIdenticalPairs([1,1,1,1])); // 6
console.log(numIdenticalPairs([1,2,3])); // 0
