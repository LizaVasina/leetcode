// https://leetcode.com/problems/top-k-frequent-elements/

var topKFrequent = function(nums, k) {
    if (nums.length === k) return nums;

    const frequencyObj = {};
    const res = [];

    for(let i = 0; i < nums.length; i++) {
        frequencyObj[nums[i]] 
            ? frequencyObj[nums[i]]++
            : frequencyObj[nums[i]] = 1;
    }

    const frequency = [...Object.values(frequencyObj)];
    frequency.sort((a,b) => b - a);

    let i = 0;
    while(i < k) {
        const elements = Object.keys(frequencyObj).filter(key => frequencyObj[key] === frequency[i]);
        res.push(...elements);

        i += elements.length;
    }

    return res;
};

console.log(topKFrequent([1,1,1,2,2,3], 2)); // [1,2]
console.log(topKFrequent([1],1)); // [1]
console.log(topKFrequent([4,1,-1,2,-1,2,3], 2)); // [-1,2]