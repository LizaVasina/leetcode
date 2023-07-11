// https://leetcode.com/problems/most-frequent-even-element/description/

var mostFrequentEven = function(nums) {
    const evens = nums.filter(num => num % 2 === 0);

    if (!evens.length) return -1;

    const frequencyObj = {};
    for(let i = 0; i < evens.length; i++) {
        frequencyObj[evens[i]]
            ? frequencyObj[evens[i]]++
            : frequencyObj[evens[i]] = 1;
    }

    const sortedFrequencies = Object.entries(frequencyObj).sort((a,b) => {
        return b[1] - a[1] !== 0 
                ? b[1] - a[1]
                : a[0] - b[0];
    })

    return sortedFrequencies[0][0];
};

console.log(mostFrequentEven([0,1,2,2,4,4,1])); // 2
console.log(mostFrequentEven([4,4,4,9,2,4])); // 4
console.log(mostFrequentEven([29,47,21,41,13,37,25,7])); // -1 (no even nums)