// https://leetcode.com/problems/rank-transform-of-an-array/

var arrayRankTransform = function(arr) {
    const uniqueValues = [ ... new Set(arr)].sort((a,b) => a - b);
    const rankArray = arr.map(el => {
        return uniqueValues.indexOf(el) + 1;
    });

    return rankArray;
};

console.log(arrayRankTransform([40,10,20,30])); // [4,1,2,3]
console.log(arrayRankTransform([100,100,100])); // [1,1,1]
console.log(arrayRankTransform([37,12,28,9,100,56,80,5,12])); // [5,3,4,2,8,6,7,1,3]
console.log(arrayRankTransform([40,10,20,30,20,40])); // [4,1,2,3,2,4]