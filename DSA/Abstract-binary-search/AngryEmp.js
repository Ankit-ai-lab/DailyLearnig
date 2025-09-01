/* Angry Employees

Description
United Share Corp. has N seats for its employees. All the N seats are located in a straight line at position x1,x2, .. xN
The company has only C employees and they don't like each other. To prevent the employees from arguing each other, United Share Corp. wants to assign the employees to the seats, such that
the minimum distance between any two of them is as large as possible.
Your task is to write a program that calculates the largest minimum distance? */


function runProgram(input) {
    input = input.trim().split("\n");
    let t = +input[0];
    let line = 1;

    for (let tc = 0; tc < t; tc++) {
        let [N, C] = input[line++].trim().split(" ").map(Number);
        let seats = [];
        for (let i = 0; i < N; i++) {
            seats.push(+input[line++]);
        }

        seats.sort((a, b) => a - b);

        let low = 0, high = seats[N - 1] - seats[0], ans = 0;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (canPlace(seats, C, mid)) {
                ans = mid;
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        console.log(ans);
    }
}

function canPlace(seats, C, dist) {
    let count = 1;
    let lastPos = seats[0];
    for (let i = 1; i < seats.length; i++) {
        if (seats[i] - lastPos >= dist) {
            count++;
            lastPos = seats[i];
        }
        if (count >= C) return true;
    }
    return false;
}
