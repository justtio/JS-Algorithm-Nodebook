/**
 * 给定一个n个元素有序的(升序)整型数组nums 和一个目标值target  ,
 * 写一个函数搜索nums中的 target，如果目标值存在返回下标，否则返回 -1。
 * 示例 1:
 * 输入: nums = [-1,0,3,5,9,12], target = 9
 * 输出: 4
 * 解释: 9 出现在 nums 中并且下标为 4
 * 示例 2:
 * 输入: nums = [-1,0,3,5,9,12], target = 2
 * 输出: -1
 * 解释: 2 不存在 nums 中因此返回 -1
 */

function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while(left <= right) {
    let mid = Math.floor(left + ((right - left) >> 1));
    
    if(nums[mid] < target) {
      left = mid + 1;
    }else if(nums[mid] > target) {
      right = mid - 1;
    }else {
      return mid;
    }
  }
  return -1;
}