var maximumNumberOfStringPairs = function(words) {
    let counter = 0;

    for(let i = 0; i < words.length - 1; i++) {
        const revCurr = words[i].split('').reverse().join('');

        const index = words.indexOf(revCurr, i + 1);
        if (index !== -1) counter++;
    }

    return counter;
};

console.log(maximumNumberOfStringPairs(["cd","ac","dc","ca","zz"])); // 2
console.log(maximumNumberOfStringPairs(["ab","ba","cc"])); // 1
console.log(maximumNumberOfStringPairs(["aa","ab"])); // 0