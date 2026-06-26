function isAnagram(s: string, t: string): boolean {
if(s.length !== t.length){
    return false
}
let map = new Map<string,number>()

for(let i = 0 ; i<s.length ; i++){
map.set(s[i] , (map.get(s[i])||0)+1)
map.set(t[i] , (map.get(t[i])||0)-1)
}

for(let count of map.values()){
    if(count!==0){
        return false
    }
}
return true
}