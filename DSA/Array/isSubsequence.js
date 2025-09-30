var isSubsequence = function(s, t) {
    let sp = 0
    let tp = 0

    while (sp < s.length && tp < t.length) {
        if (s[sp] === t[tp]) {
            sp++
        }
        tp++
    }
    return sp === s.length
};

// Example inputs
console.log(isSubsequence("abc", "ahbgdc")); // true → "abc" appears in order inside "ahbgdc"
console.log(isSubsequence("axc", "ahbgdc")); // false → "x" not in "ahbgdc"
console.log(isSubsequence("", "ahbgdc"));    // true → empty string is subsequence of any string
console.log(isSubsequence("abc", ""));       // false → non-empty s cannot be subsequence of empty t
console.log(isSubsequence("ace", "abcde"));  // true → "ace" is subsequence of "abcde"
