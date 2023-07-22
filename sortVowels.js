// https://leetcode.com/contest/biweekly-contest-109/problems/sort-vowels-in-a-string/

var sortVowels = function (s) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const res = [];

    const letters = s.split('');
    const sVowels = letters.filter(letter => vowels.includes(letter.toLowerCase()));

    if (sVowels.length < 2) return s;

    const sortedVowels = sVowels.sort((a, b) => {
        const aCode = a.charCodeAt(0);
        const bCode = b.charCodeAt(0);

        return aCode - bCode;
    });

    let j = 0;
    letters.forEach(letter => {
        if (!vowels.includes(letter.toLowerCase())) {
            res.push(letter);
        } else {
            res.push(sortedVowels[j]);
            j++;
        }
    })

    return res.join('');
};

console.log(sortVowels("lEetcOde")); // "lEOtcede"
console.log(sortVowels("lYmpH")); // "lYmpH"
console.log(sortVowels("")); // ""