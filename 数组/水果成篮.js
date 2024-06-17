//有两个篮子，每个篮子只能放一种水果，遇到其他种类只能停止放水果, 问最多能放多少个水果
//输入：[1,2,1,2,3] 输出：4
//输入：[1, 2, 1] 输出：3
//输入：[0, 1, 2, 3, 2] 输出：3

//使用滑动窗口
/**
 * Calculates the maximum number of fruits that can be placed in two baskets.
 * If a different type of fruit is encountered, the placement of fruits stops.
 * @param {number[]} fruits - The array of fruits.
 * @returns {number} - The maximum number of fruits that can be placed.
 */
function totalFruits(fruits) {
  let res = 0; // Variable to store the maximum number of fruits
  let left = 0; // Left pointer of the sliding window
  let right = 0; // Right pointer of the sliding window
  let basket = new Map(); // Map to store the types of fruits in the basket
  // 应用map数据结构，相同的key值会被覆盖，所以只会保留最新的key值
  while (right < fruits.length) {
    if (basket.size <= 2) { // If the number of fruit types in the basket is less than or equal to 2
      basket.set(fruits[right], right); // Add the current fruit to the basket
      right++; // Move the right pointer to the next fruit
    }

    if (basket.size > 2) { // If the number of fruit types in the basket is greater than 2
      let minIndex = fruits.length - 1; // Variable to store the minimum index of the fruits in the basket

      // Find the minimum index of the fruits in the basket
      for (let value of basket.values()) {
        minIndex = Math.min(minIndex, value);
      }

      left = minIndex + 1; // Move the left pointer to the next position after the minimum index
      basket.delete(fruits[minIndex]); // Remove the fruit at the minimum index from the basket
    }

    res = Math.max(res, right - left); // Update the maximum number of fruits

  }

  return res; // Return the maximum number of fruits
}

const fruits1 = [1, 2, 1, 2, 3];
const result = totalFruits(fruits1); // Output: 4