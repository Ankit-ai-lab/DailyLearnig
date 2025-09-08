function findsubset(nums){
    let res = []

    for(let num of nums){
        let newsubset = []
        for(let subset of res){
            newsubset.push([...subset,num])

        }
        res.push(...newsubset)

    }
    return res
}
console.log(findsubset([1,2,3])) //

