sortArrayByParity=(nums)=>{
    for(let i=nums.length-1;i>-1;i--){
        if(nums[i]%2!=0){
            a=nums.splice(i,1)
            nums.push(...a)  
        }
    }
    console.log(nums)
}

arr=[3,1,2,4]
console.log(arr);
sortArrayByParity(arr)