function maxProfit(prices: number[]): number {
    
    let minPrice  = prices[0]
    let profit = 0
    let maxProfit = 0

    for(let i = 0 ; i<prices.length ; i++){
        if(prices[i]<minPrice){
            minPrice = prices[i]
        }

        profit = prices[i] - minPrice

        if(profit>maxProfit){
            maxProfit = profit
        }
    }

return maxProfit

}