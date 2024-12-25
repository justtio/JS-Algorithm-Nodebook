/**
 * 给定一个整数数组nums和一个整数目标值target,
 * 请你在该数组中找出和为目标值的那两个整数，并返回它们的数组下标。
 * 你可以假设每种输入只会对应一个答案。你可以按任意顺序返回答案。
 * 
 * 示例 1:
 * 输入:nums = [2,7,11,15], target = 9
 * 输出:[0,1]
 * 解释:因为 nums[0] + nums[1] == 9，
 */

function twoSum(nums, target) {
  let map = new Map();

  for(let i = 0; i < nums.length; i++) {
    // 计算目标值与当前元素的差值
    let complement = target - nums[i];
    if(map.has(complement)) {
      return [map.get(complement), i];
    }

    // 将当前元素存入map
    map.set(nums[i], i);
  }
  return [];
}