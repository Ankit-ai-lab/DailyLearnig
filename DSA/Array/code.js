function runProgram(input) {
    input = input.trim().split("\n");
    
    let [n, m] = input[0].split(" ").map(Number);
    let board = [];
    for (let i = 1; i <= n; i++) {
        board.push(input[i].split(""));
    }
    let word = input[n + 1];
    
    function dfs(row, col, index) {
        if (index === word.length) return true;
        if (row < 0 || row >= n || col < 0 || col >= m || board[row][col] !== word[index]) {
            return false;
        }
        
        let temp = board[row][col];
        board[row][col] = "#";
        
        let directions = [
            [-1, 0], [1, 0], [0, -1], [0, 1]
        ];
        
        for (let [dx, dy] of directions) {
            let newRow = row + dx, newCol = col + dy;
            if (dfs(newRow, newCol, index + 1)) {
                return true;
            }
        }
        
        board[row][col] = temp;
        return false;
    }

    let found = false;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (board[i][j] === word[0] && dfs(i, j, 0)) {
                found = true;
                break;
            }
        }
        if (found) break;
    }
    
    console.log(found ? "YES" : "NO");
}

runProgram([
    "3 4",
    "ABCE",
    "SFCS",
    "ADEE",
    "ABCCED"
]);
