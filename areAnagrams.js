const areAnagrams = (str1, str2) => {
    if (str1.length !== str2.length) return false;
    if (str1 == str2) return true;

    const map1 = new Map();
    const map2 = new Map();

    for (let i = 0; i < str1.length; i++) {
        if (!map1.has(str1[i])) {
            map1.set(str1[i], 1)
        } else {
            map1.set(str1[i], map1.get(str1[i]) + 1)
        }

        if (!map2.has(str2[i])) {
            map2.set(str2[i], 1)
        } else {
            map2.set(str2[i], map2.get(str2[i]) + 1)
        }
    }

    return [...map1.keys()].every(ch => map2.has(ch) && map1.get(ch) == map2.get(ch))
}

console.log(areAnagrams('abc', 'cba'));
console.log(areAnagrams('abc', 'cbe'));
console.log(areAnagrams('aabc', 'cbaae'));
console.log(areAnagrams('', ''));
console.log(areAnagrams('a', ''));