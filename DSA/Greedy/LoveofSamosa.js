
/* Love of Samosa

Description
Amit went down to the Samosa street to have some. But he only has K units of money with him. There are N shops on the street and unfortunately,
all of them have only one samosa remaining. You are also given an array A, where Ai is the cost of a samosa on the i'th shop.
Find the maximum samosas that Amit can eat. */

function LoveOfSamosa(arr,price){
    let n= arr.length;
arr.sort((a,b)=>a-b)
let count  = 0;
let sum = 0

for(let i = 0;i<n;i++){
    if(sum+arr[i]<=price){
        count++
        sum+=arr[i]


    }
    console.log(count)
}
}

let arr = [5,4,2,4]
let price = 10

LoveOfSamosa(arr,price)
