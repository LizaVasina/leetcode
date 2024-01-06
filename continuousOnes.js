function continuousOnes(arr) {
    let res = 0, count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 1) {
            count++;
            res = Math.max(res, count);
        } else {
            count = 0;
        }
    }

    return res;
}

console.log(continuousOnes([0, 1, 1, 0, 1, 1])) // 2
console.log(continuousOnes([0, 1, 1, 0, 1, 1, 1])) // 3
console.log(continuousOnes([0, 1, 1, 0, 1, 1, 1, 0, 1, 1])) // 3
console.log(continuousOnes([1, 1, 1, 1])) // 4
console.log(continuousOnes([0, 0, 0, 0])) // 0
console.log(continuousOnes([])) // 0
console.log(continuousOnes([1])) // 1