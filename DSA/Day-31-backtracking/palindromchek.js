function ispalindrome(n){
    let resverse = 0;
    let temp  = Math.abs(n)
    while(temp!=0){
        reverse = (reverse*10)+(temp%10);
        temp = Math.floor(temp/10)
    }
    return (reverse===Math.abs(n))
}

// Driver Code 
let n = 12321;
if (isPalindrome(n) === true) {
    console.log("True");
}
else {
    console.log("False");
}