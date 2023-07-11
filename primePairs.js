// https://leetcode.com/contest/weekly-contest-352/problems/prime-pairs-with-target-sum/

var findPrimePairs = function (n) {
    const res = [];

    if (n <= 3) return res;

    for (let i = 2; i <= n / 2; i++) {
        if (isPrime(i)) {
            const j = n - i;

            if (isPrime(j)) {
                const curr = [i, j].sort((a, b) => a - b);

                if (!res.includes(curr)) res.push(curr);
            }
        }
    }

    return res;
};

const isPrime = (num) => {
    if (num > 2 && num % 2 === 0) return false;

    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
}

console.log(findPrimePairs(10)); // [[3,7],[5,5]]
console.log(findPrimePairs(2)); // []
console.log(findPrimePairs(12)); // [ [5,7]]
console.log(findPrimePairs(4)); // [ [2,2]]