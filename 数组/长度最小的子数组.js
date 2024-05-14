// 滑动窗口
function minSubArrayLen(target, nums) {
  let left = 0;
  let right = 0;
  let sum = 0;
  let minLen = Infinity;
  while (right < nums.length) {
    sum += nums[right];
    while (sum >= target) {
      minLen = Math.min(minLen, right - left + 1);
      sum -= nums[left];
      left++;
    }
    right++;
  }
  return minLen === Infinity ? 0 : minLen;
}