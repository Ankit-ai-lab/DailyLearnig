function containsNearbyDuplicate(nums,k){
for(let i = 0;i<nums.length;i++){
    for(let j = i+1;j<nums.length;j++){
        if(nums[i]===nums[j]&& Math.abs(i-j)<=k){
            return true
        }
    }return false
}
}

let nums = [1,2,3,1]
let k = 3
console.log(containsNearbyDuplicate(nums,k));