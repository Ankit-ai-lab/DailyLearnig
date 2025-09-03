function aAndB(str) {
    let result = str.split('');

    for (let i = 0; i < result.length; i++) {
        if (result[i] === '?') {
            if (i > 0 && result[i - 1] === 'a') {
                result[i] = 'b';
            } else if (i + 1 < result.length && result[i + 1] === 'a') {
                result[i] = 'b';
            } else {
                result[i] = 'a';
            }
        }
    }

   console.log(result.join(''));
}
