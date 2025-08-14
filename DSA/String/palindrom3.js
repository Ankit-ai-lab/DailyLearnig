function isPalindrome(str){
    let rev = str.split("").reverse().join("");
   

    if(rev ==str){
        return str
    }
    return false
}
let str1 = "racecar";
let str2 = "nitin";
let str3 = "Rama";

console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));