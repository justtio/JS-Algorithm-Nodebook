/**
 * 给定一个不含重复数字的数组nums，
 * 返回其中所有可能的全排列。
 * 示例:
 * 输入: [1,2,3]
 * 输出:
 * [
 *   [1,2,3],
 *   [1,3,2],
 *   [2,1,3],
 *   [2,3,1],
 *   [3,1,2],
 *   [3,2,1]
 * ]
 */

function permute(nums) {
  const result = []; //储存所有排列结果
  const used = new Set(); //用于跟踪已使用的数字

  function backtrack(current) {
    //基准条件：如果当前排列的长度等于输入数组长度
    if(current.length === nums.length) {
      result.push([...current]); //将当前排列添加到结果中
      return;
    }

    //遍历每个数字
    for(let num of nums) {
      if(used.has(num)) continue; //如果数字已被使用，跳过

      used.add(num); //标记数字为已使用
      current.push(num); //将数字添加到当前排列

      backtrack(current); //递归，添加下一个数字

      current.pop(); //回溯，撤销上一个数字
      used.delete(num); //撤销标记
    }
  }
  
  backtrack([]);
  return result;
}