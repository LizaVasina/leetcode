// https://leetcode.com/problems/generate-fibonacci-sequence/

var fibGenerator = function*() {
    yield 0;
    yield 1;

    let firstVal = 0;
    let secondVal = 1;
    let newVal;
    
    while(true) {
        newVal = firstVal + secondVal;
        firstVal = secondVal;
        secondVal = newVal;
        yield newVal;
    }
};



const gen = fibGenerator();
console.log('1', gen.next().value); // 0
console.log('2', gen.next().value); // 1
console.log('3', gen.next().value); // 1
console.log('4', gen.next().value); // 2
console.log('4', gen.next().value); // 3
console.log('5', gen.next().value); // 5
console.log('6', gen.next().value); // 8