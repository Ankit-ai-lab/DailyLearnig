/* Light Bulb Problem

Description
One day you are playing with a bulb. Your friend Abhishek gives you an array of size N. The array contains N types of instructions described as below:

Type 1: Flip the state of the bulb. If the bulb is ON, turn it OFF and vice versa.

Type 2: Switch ON the bulb irrespective of whether it was ON or OFF.

Type 3: Switch OFF the bulb irrespective of whether it was ON or OFF.

Type 4: Do nothing.

The bulb is initially OFF. When you get this array, you start reading it from left to right and apply the instructions accordingly.

Abhishek wants to know how many possible arrays of instructions are there such that after performing all the instructions the bulb will remain ON at the end?

Since the answer can be very large, output it modulo 
10
9
+
7
10
9
+7. */

// Fast power with modulo using BigInt
function powerMod(base, exp, mod) {
    let result = 1n;
    let b = BigInt(base);
    let e = BigInt(exp);
    let m = BigInt(mod);

    while (e > 0n) {
        if (e % 2n === 1n) {
            result = (result * b) % m;
        }
        b = (b * b) % m;
        e = e / 2n;
    }
    return result;
}

function lightBulb(T, testCases) {
    const MOD = 1000000007n;
    let results = [];

    for (let i = 0; i < T; i++) {
        let N = BigInt(testCases[i]);
        if (N === 0n) {
            results.push(0);
            continue;
        }
        // Formula: (2 * (4^(N-1))) % MOD
        let ans = (2n * powerMod(4n, N - 1n, MOD)) % MOD;
        results.push(Number(ans));
    }

    return results;
}

// Example run
let T = 2;
let testCases = [2, 3];
let outputs = lightBulb(T, testCases);
outputs.forEach(o => console.log(o));
// Expected Output:
// 8
// 32
