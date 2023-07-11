// https://leetcode.com/problems/merge-sorted-array/

var merge = function(nums1, m, nums2, n) {
    if (m === 0) {
        nums1.splice(0, nums1.length, ...nums2);

        return;
    }

    nums1.splice(m, n);

    let i = 0;
    let j = 0;

    while(i < (m + n)) {
        if (nums1[i] <= nums2[j] && nums1[i + 1] >= nums2[j]) {
            if (i === 0) {
                nums1.splice(0, 0, nums2[j]);
            } else {
                nums1.splice(i + 1, 0, nums2[j]);
            }

            i += 2;
            j += 1;
        } else if (i === nums1.length - 1) {
            while(j < nums2.length) {
                nums1.splice(i + 1, 0, nums2[j]);
                i++;
                j++;
            }

            nums1.splice(i + 1, nums1.length - i + 1);

            break;
        } else {
            i += 1;
        }
    }

    nums1.sort((a,b) => a - b)

    return nums1
};

Array.prototype.insert = function ( index, ...items ) {
    this.splice( index, 0, ...items );
};

const nums1 = [1,2,3,0,0,0];
const m = 3;
const nums2 = [2,5,6];
const n = 3;

console.log(merge(nums1, m, nums2, n));