function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }           
    const charCount = {};

    for (let char of str1) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (let char of str2) {
        if (!charCount[char]) {
            return false;
        }
        charCount[char]--;
        if (charCount[char] < 0) {
            return false;
        }
    }
    return true;
}
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));   // false
// findSubsets(4);          
// findSubsets(5);  
