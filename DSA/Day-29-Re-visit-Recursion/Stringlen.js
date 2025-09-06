function stringlen(str,i=0){
    if(i===str.length)return 0
    return 1+stringlen(str,i+1)
}

console.log(stringlen("masai",0))