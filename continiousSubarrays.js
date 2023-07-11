// 6911 https://leetcode.com/contest/weekly-contest-352/problems/continuous-subarrays/

var continuousSubarrays = function (nums) {
    let res = nums.length;

    for (let i = 0; i < nums.length - 1; i++) {
        if (Math.abs(nums[i] - nums[i + 1]) <= 2) res++;
    }

    let size = 3;
    while (size <= nums.length) {
        for (let i = 0; i < nums.length; i++) {
            const curr = nums.slice(i, i + size);

            if (curr.length < size) break;

            const first = curr.every(num => num >= curr[0] - 2 && num <= curr[0]);

            if (first) {
                res++;
            } else {
                const second = curr.every(num => num >= curr[0] - 1 && num <= curr[0] + 1);

                if (second) {
                    res++;
                } else {
                    const third = curr.every(num => num >= curr[0] && num <= curr[0] + 2);
                    if (third) res++;
                }
            }
        }

        size++;
    }

    return res;
};

console.log(continuousSubarrays([5, 4, 2, 4])); // 8
console.log(continuousSubarrays([1, 2, 3])); // 6

