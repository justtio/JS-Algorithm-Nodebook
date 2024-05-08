//将数组中所有零移动到末尾，不使用额外空间

function moveZeroes(nums) {
  let i = 0;
  for(let j = 0; j < nums.length; j++) {
    if(nums[j] !== 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
    }
  }
  return nums;
}
