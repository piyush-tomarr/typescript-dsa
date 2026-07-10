function mergeAlternately(word1: string, word2: string): string {

let i=0
let j = 0
let output = ''

while(i<word1.length && j<word2.length){
    output+= word1[i]
    i++
    output += word2[j]
    j++
}


 output+= word1.slice(i)
 output+= word2.slice(j)

 return output
};