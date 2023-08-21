// https://leetcode.com/contest/biweekly-contest-111/problems/make-string-a-subsequence-using-cyclic-increments/

var canMakeSubsequence = function (str1, str2) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const chars1 = str1.split('');
    const chars2 = str2.split('');
    const flags = new Array(chars2.length).fill(false);

    let j = 0;
    for (let i = 0; i < chars1.length; i++) {
        const index = alphabet.indexOf(chars1[i]);
        const diffLetter = index == 25 ? alphabet[0] : alphabet[index + 1];

        if (chars2[j] == chars1[i] || chars2[j] == diffLetter) {
            flags[j] = true;
            j++;
        }
    }

    return flags.every(flag => flag == true);
};

console.log(canMakeSubsequence("abc", "ad")); // true
console.log(canMakeSubsequence("zc", "ad")); // true
console.log(canMakeSubsequence("ab", "d")); // false
console.log(canMakeSubsequence("abcdefg", "defg")); // false