// https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/

var sortByBits = function(arr) {
    return arr.sort((a,b) => getBitCount(a) - getBitCount(b) || a - b);
};

var getBitCount = function(num) {
    return num.toString(2).split('').filter(el => el == 1).length;
}

console.log(sortByBits([0,1,2,3,4,5,6,7,8])); // [0,1,2,4,8,3,5,6,7]
console.log(sortByBits([1024,512,256,128,64,32,16,8,4,2,1])); // [1,2,4,8,16,32,64,128,256,512,1024]
console.log(sortByBits([10000,10000])); // [10000,10000]