// 不使用额外空间
// 1. 用两个指针，一个指向当前元素，一个指向下一个元素
function removeElement(nums, val) {
  let i = 0;
  for(let j = 0; j < nums.length; j++) {
    if(nums[j] !== val) {
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
}

//使用splice
function removeElement1(nums, val) {
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
}