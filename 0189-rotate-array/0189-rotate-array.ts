function rotateSubArr(nums:number[],start:number,end:number):void{

while(start<end){
  [nums[start] , nums[end]] = [nums[end] , nums[start]]
  start++
  end--
}

}


function rotate(nums: number[], k: number): void{
   k=k%nums.length
   let start = 0;
   let end = nums.length-1
  

  while(start<end){
    [nums[start],nums[end]] = [nums[end] , nums[start]]
    start++
    end--
  }

  rotateSubArr(nums ,0 , k-1)
  rotateSubArr(nums,k , nums.length-1)
  

}