//主要分四种情况
// taget在数组所有元素之前
// taget等于数组中某个元素
// taget插入数组中的某个元素
// taget在数组所有元素之后

// 暴力解法
function searchInsert(nums, target) {
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] >= target) {
      return i;
    }
  }
  return n;
}

// 二分查找
function searchInsert1(nums, targes) {
  let n = nums.length;
  let left = 0, right = n - 1, ans = n;
  while (left <= right) {
    let mid = left + Math.floor((right - left) >> 1);

    if(target > nums[mid]) {
      left = mid + 1;
    }else {
      ans = mid;
      right = mid - 1;
    }
  }
  return ans;
}