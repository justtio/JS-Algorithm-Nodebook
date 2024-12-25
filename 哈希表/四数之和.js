function fourSum(nums, target) {
  const len = nums.length;
  if (len < 4) return [];
  
  nums.sort((a, b) => a - b); // 先排序
  const res = [];
  
  for (let i = 0; i < len - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; // 跳过重复的 'i'
    
    // 提前终止条件
    if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break;
    if (nums[i] + nums[len - 1] + nums[len - 2] + nums[len - 3] < target) continue;
    
    for (let j = i + 1; j < len - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue; // 跳过重复的 'j'
      
      // 提前终止条件
      if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) break;
      if (nums[i] + nums[j] + nums[len - 1] + nums[len - 2] < target) continue;
      
      let left = j + 1;
      let right = len - 1;
      
      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum === target) {
          res.push([nums[i], nums[j], nums[left], nums[right]]);
          // 跳过重复的 'left'
          while (left < right && nums[left] === nums[left + 1]) left++;
          // 跳过重复的 'right'
          while (left < right && nums[right] === nums[right - 1]) right--;
          left++;
          right--;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }
  
  return res;
}