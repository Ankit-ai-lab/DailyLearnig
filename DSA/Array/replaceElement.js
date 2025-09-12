var replaceElements = function(arr) {
    let n = arr.length
    let res = new Array(n).fill(-1)

    if(n===0)return res

    for(let i=0;i<n-1;i++){
        let maxright = arr[i+1]
        for(let j = i+2;i<n;j++){
            maxright = Math.max(maxright,arr[j])
        }
        res[i]= maxright
    }
    return res
};