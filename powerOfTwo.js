// https://leetcode.com/problems/power-of-two/description/

var isPowerOfTwo = function(n) {
    return Math.log2(n) % 1 === 0;

    // решение без библиотеки Math
    // if (n === 0) {
    //     return false;
    // }

    // while (n !== 1) {
    //     if (n % 2 !== 0) {
    //         return false;
    //     }

    //     n /= 2;

    //     console.log('19', n);
    // }

    // return true;
};

console.log(isPowerOfTwo(1)); // true
console.log(isPowerOfTwo(16)); // true
console.log(isPowerOfTwo(3)); // false
console.log(isPowerOfTwo(8)); // true