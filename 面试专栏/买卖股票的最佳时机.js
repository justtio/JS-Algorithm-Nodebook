/**
 * 给定一个数组prices，它的第i个元素prices[i]是一支给定股票第i天的价格。
 * 你只能选择某一天买入这只股票，并选择在未来的某一个不同的日子卖出该股票。设计一个算法来计算你所能获取的最大利润。
 * 示例 1:
 * 输入: [7,1,5,3,6,4]
 * 输出: 5
 * 解释: 在第 2 天(股票价格 = 1)的时候买入,在第 5 天(股票价格 = 6)的时候卖出,最大利润 = 6-1 = 5 。
 *      注意利润不能是 7-1 = 6，这是因为卖出价格需要大于买入价格。
 * 示例 2:
 * 输入: [7,6,4,3,1]
 * 输出: 0
 * 解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
 */

function maxProfit(prices) {
  let minPrice = Infinity; //初始设定最小价格为正无穷
  let maxProfit = 0; //初始设定最大利润为0

  for(let i = 0; i < prices.length; i++) {
    //如果当前价格小于最小价格，更新最小价格
    if(prices[i] < minPrice) {
      minPrice = prices[i];
    }else {
      //计算当前利润，更新最大利润
      maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }
  }
  return maxProfit;
}