
let people = [5,1,4,2]
let limit = 6

function numRescueBoats(people: number[], limit: number): number {
    
let sortedPeople  = people.sort((a,b)=>a-b)

let start =0
let end = people.length-1

let output = 0
while(start<=end){
    if(sortedPeople[end] +sortedPeople[start] <= limit){
     start++
    }
    end--
    output++
  
}
return output
};


console.log(numRescueBoats(people,limit))