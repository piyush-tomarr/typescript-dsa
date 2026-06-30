function topKFrequent(nums: number[], k: number): number[] {

let map = new Map<number,number>()

for(let i = 0 ; i<nums.length ; i++){
    map.set(nums[i] , (map.get(nums[i])||0)+1)
}

let bucket:number[][] = Array.from({length:nums.length+1} , ()=>[])

for(let[key,value]of map){
    bucket[value].push(key)
}

let output=[]
for(let i=bucket.length-1 ; i>=0 && output.length <k ; i--){
    for(let j = 0 ; j<bucket[i].length ; j++){
        output.push(bucket[i][j])
    }
}

return output
}