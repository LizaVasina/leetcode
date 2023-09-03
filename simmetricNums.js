// https://leetcode.com/contest/weekly-contest-361/problems/count-symmetric-integers/

var countSymmetricIntegers = function (low, high) {
    let count = 0;

    for (let i = low; i <= high; i++) {
        let firstHalf = 0, secondHalf = 0;

        const chars = String(i).split('');

        if (chars.length % 2 !== 0) continue;

        chars.forEach((ch, j) => {
            if (j < chars.length / 2) {
                firstHalf += +ch;
            } else {
                secondHalf += +ch;
            }
        })

        if (firstHalf == secondHalf) count++;
    }

    return count;
};

console.log(countSymmetricIntegers(1, 100)); // 9
console.log(countSymmetricIntegers(1200, 1230)); // 4