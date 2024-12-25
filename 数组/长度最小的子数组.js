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

//write some console.log() tests
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); //2
console.log(minSubArrayLen(4, [1, 4, 4])); //1

function minSubArrayLen(target, nums) {
  let res = Infinity;
  let sum = 0;
  let i = 0;
  for(let j = 0; j <= nums.length; j++) {
    sum += nums[j];
    while(sum >= target) {
      res = Math.min(res, j - i + 1);
      sum = sum - nums[i];
      i++;
    }
  }
}