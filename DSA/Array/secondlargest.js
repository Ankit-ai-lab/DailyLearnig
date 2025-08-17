// find the second largest number in array

let n = [10,20,30,40,50]

function secL(n){
    let secondlargest = -1, max =-1

    for(let i = 0;i<n.length;i++){
        if(n[i]>max){
           secondlargest = max
            max = n[i]
        }else if(arr[i]<max && n[i]>secondlargest){
            secondlargest=arr[i]
        }
    }
    return secondlargest
}

console.log(secL(n))