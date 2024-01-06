const uniquesSubarrays = (arr) => {
    let count = arr.length;

    arr.forEach((el, i) => {
        const set = new Set([el]);
        let prevLength = set.size;

        let j = i + 1;
        while (j < arr.length) {
            set.add(arr[j]);

            if (prevLength == set.size) {
                break;
            }

            prevLength = set.size;
            j++;
            count++;
        }
    });

    return count;
}

console.log(uniquesSubarrays([1, 2, 3, 3, 4, 5]));