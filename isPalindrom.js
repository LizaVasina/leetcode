function isPalindrom(str) {
    const testStr = str.split('').filter(ch => ch.match(/[a-zA-Z]/)).join('').toLowerCase();

    console.log(testStr)

    return str;
}

console.log(isPalindrom('Казак'));
console.log(isPalindrom('А роза упала на лапу Азора'));
console.log(isPalindrom('Do geese see God?'));
console.log(isPalindrom('Madam, I`m Adam'));