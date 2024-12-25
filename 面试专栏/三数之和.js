/**
 * 给你一个整数数组nums, 判断是否存在三元组
 * [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k
 * 同时满足 nums[i] + nums[j] + nums[k] == 0
 * 请你返回所有和为 0 且不重复的三元组
 * 示例 1:
 * 输入:nums = [-1,0,1,2,-1,-4]
 * 输出:[[-1,-1,2],[-1,0,1]]
 * 解释:
 * nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0
 * nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0
 * nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0
 */

// 排序加上双指针

function threeSum(nums) {
  let result = [];

  //排序数组
  nums.sort((a, b) => a - b);

  for(let i = 0; i < nums.length - 2; i++) {
    //跳过重复元素
    if(i > 0 && nums[i] === nums[i - 1]) continue;

    //双指针
    let left = i + 1;
    let right = nums.length - 1;

    while(left < right) {
      let sum = nums[i] + nums[left] + nums[right];

      if(sum === 0) {
        //找到三元组
        result.push([nums[i], nums[left], nums[right]]);
        //跳过重复的左指针元素
        while(left < right && nums[left] === nums[left + 1]) left++;
        //跳过重复的右指针元素
        while(left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      }else if(sum > 0) {
        right--;
      }else {
        left++;
      }
    }
  }
  return result;
}