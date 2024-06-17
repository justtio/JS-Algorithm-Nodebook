// 滑动窗口
/**
 * Finds the minimum length of a subarray in the given array `nums` whose sum is greater than or equal to the target value.
 *
 * @param {number} target - The target value.
 * @param {number[]} nums - The array of numbers.
 * @returns {number} - The minimum length of the subarray. Returns 0 if no such subarray exists.
 */
function minSubArrayLen(target, nums) {
  // Initialize pointers and variables
  let left = 0;
  let right = 0;
  let sum = 0;
  let minLen = Infinity;

  // Move the right pointer to expand the window
  while (right < nums.length) {
    sum += nums[right];

    // Shrink the window if the sum is greater than or equal to the target
    while (sum >= target) {
      minLen = Math.min(minLen, right - left + 1);
      sum -= nums[left];
      left++;
    }

    // Move the right pointer to continue expanding the window
    right++;
  }

  // Return the minimum length of the subarray
  return minLen === Infinity ? 0 : minLen;
}