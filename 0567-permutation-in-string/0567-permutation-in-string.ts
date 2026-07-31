function checkInclusion(s1: string, s2: string): boolean {
if(s1.length>s2.length) return false
let s1Map = new Map<string,number>()
let windowMap = new Map<string,number>()

for(let i = 0 ; i<s1.length ; i++){
   s1Map.set(s1[i] , (s1Map.get(s1[i])||0)+1)
   windowMap.set(s2[i] ,(windowMap.get(s2[i])||0)+1)
}


let start = 0
let end = s1.length-1

while(true){
   let isMatched = true
   for(let [key,values] of s1Map){
    
     
    if(windowMap.get(key)!==values){
      isMatched=false
      break
    }
    }

    if(isMatched) return true

    let leftChar = s2[start]
    windowMap.set(leftChar ,(windowMap.get(leftChar)||0)-1)

    if(windowMap.get(leftChar)===0){
      windowMap.delete(leftChar)
    }

    
    if(end===s2.length-1) return false
     start++
    end++
    let rightChar = s2[end]
    windowMap.set(rightChar , (windowMap.get(rightChar)||0)+1)

   
   
}

}