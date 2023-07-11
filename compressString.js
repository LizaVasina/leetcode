// https://leetcode.com/problems/string-compression/

var compress = function(chars) {
    let i = 0; 

    while(i < chars.length) {
        const currentChar = chars[i];
        const startIndex = i;
        let counter = 0;

        while(chars[i] === currentChar) {
            counter++;
            i++;
        }

        if (counter !== 1) {
            const numbers = String(counter).split('');
            chars.splice(startIndex + 1, counter - 1, ...numbers);
            i = startIndex + numbers.length + 1;
        } else {
            chars.splice(startIndex + 1, counter - 1);
        }
    }
};

const chars = ["a","a","b","b","c","c","c"];
console.log('before', chars);
compress(chars);
console.log('after', chars); // [ 'a', '2', 'b', '2', 'c', '3' ]

const as = ["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"];
console.log('before', as);
compress(as);
console.log('after', as); // [ 'a', '1', '0', '0' ]

const chars3 = ["1","1","1","3","3","c","c"];
console.log('before', chars3);
compress(chars3);
console.log('after', chars3); // [ '1', '3', '3', '2', 'c', '2' ]

