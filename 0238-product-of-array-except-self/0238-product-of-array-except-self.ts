function productExceptSelf(nums: number[]): number[] {
    let n = nums.length
    let output = Array.from({length:n} , ()=> 1)

    for(let i = 1 ; i<n ; i++){
        output[i] = output[i-1] * nums[i-1]
    }
 
   let rightProduct = 1
    for(let i = n-1 ; i>=0 ; i--){
       output[i] = output[i] * rightProduct
       rightProduct = rightProduct* nums[i]
    }
    

    return output
};