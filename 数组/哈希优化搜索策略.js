// 返回两数之和，在一个数组中
//暴力枚举
function twoSumBruteForce(nums, target) {
  for(let i = 0; i< nums.length; i++) {
    for(let j = i+1; j < nums.length; j++) {
      if(nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

function twoSumHashTable(nums, target) {
  let m = {};
  for(let i = 0; i < nums.length; i++) {
    if(m[target - nums[i]] !== undefined) {
      return [m[target - nums[i]], i];
    }else {
      m[nums[i]] = i;
    }
  }
  return [];
}