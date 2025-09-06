function runProgram(input) {
  input = input.trim().split("\n");
  let t = +input[0];
  let line = 1;
  for (let i = 0; i < t; i++) {
    let n = +input[line++];
    console.log(nick(n));
  }
}

function nick(n) {
  if (n === 1) return "Yes";
  if (n < 1) return "No";
  if (n % 10 === 0) {
    if (nick(n / 10) === "Yes") return "Yes";
  }
  if (n % 20 === 0) {
    if (nick(n / 20) === "Yes") return "Yes";
  }
  return "No";
}
