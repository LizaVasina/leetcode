// https://leetcode.com/contest/biweekly-contest-113/problems/minimum-array-length-after-pair-removals/

var minLengthAfterRemovals = function (nums) {
    const set = new Set(nums);

    if (set.size == 1) return nums.length;

    const map = new Map();
    nums.forEach(num => {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1)
        } else {
            map.set(num, 1);
        }
    })

    const keys = [...map.keys()];
    for (let i = 0; i < keys.length; i++) {
        const curr = keys[i];

        while (map.get(curr) > 0) {
            const val = [...map.entries()].find(el => el[0] > curr && el[1] > 1);

            if (!val) {
                const second = [...map.entries()].find(el => el[0] > curr && el[1] == 1);

                if (!second) break;

                map.set(curr, map.get(curr) - 1);
                map.set(second[0], map.get(second[0]) - 1);
            } else {
                map.set(curr, map.get(curr) - 1);
                map.set(val[0], map.get(val[0]) - 1);
            }
        }
    }

    return [...map.values()].reduce((acc, curr) => acc += curr, 0);
};


console.log(minLengthAfterRemovals([1, 3, 4, 9])); // 0
console.log(minLengthAfterRemovals([2, 3, 6, 9])); // 0
console.log(minLengthAfterRemovals([1, 1, 2])); // 1
console.log(minLengthAfterRemovals([1, 1, 2, 2])); // 0
console.log(minLengthAfterRemovals([1, 1, 2, 2, 2, 2])); // 2
console.log(minLengthAfterRemovals([1, 1, 2, 2, 2, 3, 3, 3, 3])); // 1


// let j = keys.length - 1;

// while (map.get(curr) > 0 && j > i) {
//     if (map.get(keys[j]) > 0) {
//         map.set(curr, map.get(curr) - 1);
//         map.set(keys[j], map.get(keys[j]) - 1)
//     } else {
//         j--;
//     }
// }