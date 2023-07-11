// https://leetcode.com/problems/thousand-separator/

var thousandSeparator = function(n) {
    if (n < 1000) return n.toString();
    let num = n;
    let numOfBlocks = Math.ceil(n.toString().length / 3);
    let res = '';

    while(numOfBlocks) {
        const leftNum = num % 1000;
        num = Math.floor(num / 1000);

        res = leftNum + res;
        if (numOfBlocks !== 1) {
            if (leftNum < 10) { res = '00' + res }
            else if (leftNum < 100) { res = '0' + res }

            res = '.' + res;
        }

        numOfBlocks--;
    }

    return res;
};

console.log(thousandSeparator(987)); // 987
console.log(thousandSeparator(1234)); // 1.234
console.log(thousandSeparator(123456789)); // 123.456.789
console.log(thousandSeparator(51040)); // 51.040