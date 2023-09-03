// https://leetcode.com/contest/weekly-contest-361/problems/minimum-operations-to-make-a-special-number/

var minimumOperations = function (num) {
    if (num.length == 1) return 1;
    if (num.length == 2) {
        if (+num % 25 == 0) return 0;
        if (num.split('').includes('0')) {
            return 1;
        } else {
            return 2;
        }
    }

    const chars = num.split('');
    const firstZero = chars.lastIndexOf('0');
    const firstFive = chars.lastIndexOf('5');

    if (firstZero == -1 && firstFive == -1) return num.length;

    let zeroCount;
    if (firstZero !== -1) {
        let secondNum;
        for (let i = firstZero - 1; i >= 0; i--) {
            if (chars[i] == '0' || chars[i] == '5') {
                secondNum = i;
                break;
            }
        }

        zeroCount = (num.length - firstZero - 1) + (firstZero - secondNum - 1);
    }

    let fiveCount;
    if (firstFive !== -1) {
        let secondNum;
        for (let i = firstFive - 1; i >= 0; i--) {
            if (chars[i] == '2' || chars[i] == '7') {
                secondNum = i;
                break;
            }
        }

        fiveCount = (num.length - firstFive - 1) + (firstFive - secondNum - 1);
    }

    if (zeroCount == 0 || fiveCount == 0) return 0;
    if (!zeroCount) zeroCount = undefined;
    if (!fiveCount) fiveCount = undefined;

    if (zeroCount && fiveCount) {
        return Math.min(zeroCount, fiveCount);
    }

    if (typeof zeroCount == 'undefined' && typeof fiveCount == 'undefined') {
        return chars.includes('0') ? num.length - 1 : num.length;
    } else {
        return typeof zeroCount !== 'undefined' ? zeroCount : fiveCount;
    }

};

console.log(minimumOperations("2245047")); // 2
console.log(minimumOperations("22447")); // 5
console.log(minimumOperations("2908305")); // 3
console.log(minimumOperations("10")); // 1
console.log(minimumOperations("3567325")); // 0
console.log(minimumOperations("6525479784667")); // 9
console.log(minimumOperations("35635")); // 5
console.log(minimumOperations("820366")); // 5
console.log(minimumOperations("9777694769343797637963158000328441799598794999")); // 10
console.log(minimumOperations("25")); // 0
console.log(minimumOperations("125")); // 0