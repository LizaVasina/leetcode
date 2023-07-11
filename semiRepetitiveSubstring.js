var longestSemiRepetitiveSubstring = function(s) {
    let longestStr = 0;
    let hasRepeats = false;
    const arr = s.split('');

    const uniques = new Set(arr);
    if (uniques.size === arr.length) return arr.length;
    
    for(let i = 0; i < arr.length; i++) {
        let curr = [arr[i]];
        
        for(let j = i + 1; j < arr.length; j++) {
            if (arr[j] === curr[curr.length - 1]) {
                if (hasRepeats) {
                    console.log(curr);
                    hasRepeats = false;
                    if (curr.length > longestStr) {
                        longestStr = curr.length;
                    }
                    
                    break;
                }
                
                console.log(curr);
                hasRepeats = true;
            }
            
            curr.push(arr[j]);
            if (curr.length > longestStr) longestStr = curr.length;
        }
    }
    
    return longestStr;
};

console.log(longestSemiRepetitiveSubstring('52233'));
console.log(longestSemiRepetitiveSubstring('5494'));
console.log(longestSemiRepetitiveSubstring('1111111'));
console.log(longestSemiRepetitiveSubstring('454946787'));
console.log(longestSemiRepetitiveSubstring('0')); // 1
console.log(longestSemiRepetitiveSubstring('123')); // 3
console.log(longestSemiRepetitiveSubstring('001')); // 3
console.log(longestSemiRepetitiveSubstring('0001')); // 3
console.log(longestSemiRepetitiveSubstring('0010')); // 4
console.log(longestSemiRepetitiveSubstring('002030')); // 6