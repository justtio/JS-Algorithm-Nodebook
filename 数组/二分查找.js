//要求数组是有序的并且无重复元素
// 二分查找区间定义一般有两种：左闭右开和左闭右闭

// 1. 左闭右开区间
function binarySearch1(nums, target) {
  let mid, left = 0, right = nums.length;

  while(left < right){
    // 位运算防止溢出
    mid = left + ((right - left) >> 1);
    if(nums[mid] > target) {
      right = mid;
    }else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}

// 2. 左闭右闭区间
function binarySearch2(nums, target) {
  let mid, left = 0, right = nums.length - 1;

  while(left <= right) {
    mid = left + ((right - left) >> 1);
    if(nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    }else {
      return mid;
    }
  }
  return -1;
}