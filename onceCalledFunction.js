// https://leetcode.com/problems/allow-one-function-call/

var once = function(fn) {
    let wasExcecuted = false;

    return function(...args){
        if (!wasExcecuted) {
            wasExcecuted = true;

            return fn(...args);
        }
    }
};


let fn = (a,b,c) => (a + b + c)
let onceFn = once(fn)
 
console.log(onceFn(1,2,3)); // 6
console.log(onceFn(2,3,6)); // returns undefined without calling fn
