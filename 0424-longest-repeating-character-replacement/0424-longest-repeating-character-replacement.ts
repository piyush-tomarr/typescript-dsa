function characterReplacement(s: string, k: number): number {
let map = new Map<string , number>()
let start = 0
let curMax = 0
let maxlen = 0
for(let end = 0 ; end<s.length ; end++){
   map.set(s[end] , (map.get(s[end])||0)+1)

   if(curMax<map.get(s[end])!){
    curMax = map.get(s[end])!
   }

   let windowLen = (end-start )+1
   
   while((windowLen-curMax)>k){
      map.set(s[start] , (map.get(s[start])!)-1)
    start++
    windowLen = (end-start)+1
   }
   
   if(maxlen<windowLen){
    maxlen=windowLen
   }
    
}
return maxlen

}