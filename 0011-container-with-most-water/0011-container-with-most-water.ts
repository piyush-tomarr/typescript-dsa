function maxArea(heights: number[]): number {

    let start = 0
    let end = heights.length-1
     let outputArea = 0
    while(start<end){
      let width  = end-start
      let height  = Math.min(heights[start] ,heights[end])
       let area = width*height
       outputArea = Math.max(outputArea,area)

      if(heights[start]<heights[end]){
        start++
      }
      else end--
    }
    return outputArea
}