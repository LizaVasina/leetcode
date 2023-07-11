// https://leetcode.com/problems/word-pattern/

var wordPattern = function(p, s) {
    const pattern = p.split('');
    const words = s.split(' ');

    const patternObj = {};

    if (pattern.length !== words.length) return false;

    for(let i = 0; i < pattern.length; i++) {
        if (!Object.keys(patternObj).includes(pattern[i]) && !Object.values(patternObj).includes(words[i])) {
            patternObj[pattern[i]] = words[i];
        } else if (patternObj[pattern[i]] !== words[i]) {
            return false;
        }
    }

    return true;
};

console.log(wordPattern("abba", "dog cat cat dog")); // true
console.log(wordPattern("abba", "dog cat dog dog")); // false
console.log(wordPattern("aaaa", "dog cat cat dog")); // false