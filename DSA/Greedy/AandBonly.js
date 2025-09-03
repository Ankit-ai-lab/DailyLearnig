/* a and b only

Description
You are given a string S that contains 3 characters: 'a', 'b', and '?'. Your task is to convert it to a string which contains only 2 characters: 'a', 'b'. The converted string must follow following conditions:
1. It should not contains two letters 'a' in a row.
2. if there are many strings possible, the answer should be one which is the first in alphabetical order
(Read sample test case for better understanding) */

function aAndB(str) {
    let result = str.split('');

    for (let i = 0; i < result.length; i++) {
        if (result[i] === '?') {
            // Check the previous character and the next character
            if (i > 0 && result[i - 1] === 'a') {
                result[i] = 'b';  // If previous is 'a', replace '?' with 'b'
            } else {
                result[i] = 'a';  // Otherwise, replace '?' with 'a'
            }
        }
    }

    return result.join('');
}

// Example usage:
let input = '?ba?b?';
console.log(aAndB(input)); // Expected output: 'ababab'


