//不使用Set
//双指针
function removeDuplicates(nums) {
  let i = 0;
  for(let j = 1; j < nums.length; j++) {
    if(nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
}

//使用Set
function removeDuplicates2(nums) {
  return new Set(nums).size;
}