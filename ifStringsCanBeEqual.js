// https://leetcode.com/contest/biweekly-contest-112/problems/check-if-strings-can-be-made-equal-with-operations-i/

// var canBeEqual = function (s1, s2) {
//     const s1Even = (s1[0] + s1[2]).split('').sort().join('');
//     const s1Odd = (s1[1] + s1[3]).split('').sort().join('');

//     const s2Even = (s2[0] + s2[2]).split('').sort().join('');
//     const s2Odd = (s2[1] + s2[3]).split('').sort().join('');

//     return s1Even == s2Even && s1Odd == s2Odd;
// };

// https://leetcode.com/contest/biweekly-contest-112/problems/check-if-strings-can-be-made-equal-with-operations-ii/
var canBeEqual = function (s1, s2) {
    const s1Even = [];
    const s1Odd = [];
    const s2Even = [];
    const s2Odd = [];

    for (let i = 0; i < s1.length; i++) {
        if (i % 2 == 0) {
            s1Even.push(s1[i]);
            s2Even.push(s2[i]);
        } else {
            s1Odd.push(s1[i]);
            s2Odd.push(s2[i]);
        }
    }

    s1Even.sort();
    s2Even.sort();
    s1Odd.sort();
    s2Odd.sort();

    return s1Even.join('') == s2Even.join('') && s1Odd.join('') == s2Odd.join('');
};

console.log(canBeEqual("abcd", "cdab")); // true
console.log(canBeEqual("abcd", "dacb")); // false
console.log(canBeEqual("abcdba", "cabdab")); // true
console.log(canBeEqual("abe", "bea")); // false