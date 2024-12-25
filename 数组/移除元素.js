/**
 * 给你一个数组nums和一个值val, 你需要原地移除所有数值等于val的元素，
 * 并且返回移除后新数组长度
 * 不可使用额外的数组空间
 * 元素的顺序可以改变，不需要考虑数组中超出新长度后面的元素
 * 示例1
 * 输入: nums = [3, 2, 2, 3], val = 3
 * 输出: 2, nums = [2, 2]
 * 解释: 函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。 你不需要考虑数组中超出新长度后面的元素。
 */

// 不使用额外空间
// 1. 用两个指针，一个指向当前元素，一个指向下一个元素
function removeElement(nums, val) {
  let i = 0;
  for(let j = 0; j < nums.length; j++) { //遍历数组, 只有符合条件的元素才会被赋值
    // 如果当前元素不等于val, 就把当前元素赋值给nums[i]
    if(nums[j] !== val) {
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
}
function removeElement(nums, val) {
  let i = 0;
  for(let j = 0; j < nums.length; j++) {
    if(nums[j] !== val) {
      nums[i] = nums[j];
      i++;
    }
  }
  return i; //i的值就是新数组的长度
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

//write some console.log() tests
console.log(removeElement([3, 2, 2, 3], 3)); //2

function removeEle (arr, val) {
  let i = 0;
  for(let j = 0; j < arr.length; j++) {
    if(arr[j] !== val) {
      arr[i] = arr[j];
      i++;
    }
  }
  return i;
}