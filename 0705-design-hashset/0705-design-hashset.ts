class MyHashSet{
 
private buckets:number[][]=[]
  private size:number = 1000
   
   constructor(){
     this.buckets = Array.from({length:this.size} , ()=>[])
   }

   private hash(key:number){
      return key % this.size
   }

   public add(value:number){
   let bucket = this.buckets[this.hash(value)]
   if(bucket.includes(value)) return
     bucket.push(value)
   }
   
   public contains(value:number){
    let bucket = this.buckets[this.hash(value)]
    return bucket.includes(value)
   }

   public remove(value:number){
    let bucket = this.buckets[this.hash(value)]
    let index = bucket.indexOf(value)
     if(index !== -1) bucket.splice(index , 1)
     
   }
}