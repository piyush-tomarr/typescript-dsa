function isValid(s: string): boolean {
    let stack  = []
    let pair : Record<string,string>={
      "]":"[",
      "}":"{",
      ")":"("
    }

 for(let i = 0 ; i<s.length ; i++){
  if(s[i]==='[' || s[i]==='{' || s[i]==='('){
    stack.push(s[i])
  }
  else{
    let top = stack.pop()
    if(top!== pair[s[i]]){
      return false
    }
  }
 }
 return stack.length===0
};