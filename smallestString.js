var smallestString = function(s) {
    const letters = s.split('');
    
    if (!letters.includes('a')) {
        const movedLetters = letters.map((letter, index) => {
            const code = s.charCodeAt(index);
            return String.fromCharCode(code - 1);
        })

        return movedLetters.join('');
    }

    const uniques = new Set(letters);
    if (uniques.size === 1 && uniques.has('a')) {
        letters[letters.length - 1] = 'z';
        return letters.join('');
    }

    let subarr = [];
    let index;

    for(let i = 0; i < letters.length; i++) {
        if (letters[i] !== 'a') {
            if (subarr.length === 0) index = i;
            subarr.push(letters[i]);
        } else {
            if (subarr.length !== 0) break;
        }
    }

    const modified = subarr.map((letter) => {
        const code = letter.charCodeAt(0);
        return String.fromCharCode(code - 1);
    });

    letters.splice(index, modified.length, ...modified);

    return letters.join('');
};

console.log(smallestString('cbabc'));
console.log(smallestString('acbbc'));
console.log(smallestString('cbbcabcd'));
console.log(smallestString('leetcode'));
console.log(smallestString('a'));
console.log(smallestString('aaa'));
console.log(smallestString('b'));
console.log(smallestString('ab'));