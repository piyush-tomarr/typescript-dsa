class MinStack {
   private mainStack:number[];
   private minStack:number[]
    constructor() {
        this.mainStack=[]
        this.minStack=[]
    }

    push(value: number): void {
        this.mainStack.push(value)
        
        if(this.minStack.length===0){
          this.minStack.push(value)
        }
        else{
          let currentMin = this.minStack[this.minStack.length - 1]
          this.minStack.push(Math.min(value,currentMin))
        }
    }

    pop(): void {
        this.mainStack.pop()
        this.minStack.pop()
    }

    top(): number {
        return this.mainStack[this.mainStack.length -1]
    }

    getMin(): number {
        return this.minStack[this.minStack.length -1]
    }
}