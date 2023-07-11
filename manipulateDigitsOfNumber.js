// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/

var subtractProductAndSum = function(n) {
    const arrOfNums = n.toString().split('');

    const product = arrOfNums.reduce((acc, el) => acc *= +el, 1);
    const sum = arrOfNums.reduce((acc, el) => acc += +el, 0);

    return product - sum;
};

console.log(subtractProductAndSum(234)); // 15
console.log(subtractProductAndSum(4421)); // 21