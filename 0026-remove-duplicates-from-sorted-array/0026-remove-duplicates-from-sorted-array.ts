function removeDuplicates(nums: number[]): number {
    let start = 0
    
    for(let i = 1 ; i<nums.length ; i++){
        if(nums[i] !== nums[start]){
            start++
            nums[start] = nums[i]
        } 
    }
    return start +1
};