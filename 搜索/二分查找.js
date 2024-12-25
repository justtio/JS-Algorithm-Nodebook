/**
 * 给定一个长度为n的数组nums，元素按从小到大的顺序排列不重复
 * 请查找并返回元素target在该数组中的索引。
 * 若数组中不存在target，返回-1
 */

//区间遵循左闭右开
function binarySearch(nums, target) {
  let left = 0,
  right = nums.length;
  while(left < right) {
    //为了避免大数越界，采用如下公式
    const mid = left +((right - left) >> 1);
    if(nums[mid] < target) {
      // 此种情况说明target在区间[mid + 1, right)中
      left = mid + 1;
    }else if(nums[mid] > target) {
      // 此种情况说明target在区间[left, mid)中
      right = mid;
    }else {
      return mid;
    }
  }
  return -1;
}

//区间左闭右闭
function binarySearch(nums, target) {
  let left = 0,
  right = nums.length - 1;
  while(left <= right) {
    const mid = left + ((right - left) >> 1);
    if(nums[mid] < target) {
      // 此种情况说明target在区间[mid + 1, right]中
      left = mid + 1;
    }else if (nums[mid] > target) {
      // 此种情况说明target在区间[left, mid - 1]中
      right = mid - 1;
    }else {
      return mid;
    }
  }
  return -1;
}

/**
 * 给定一个长度为n的有序数组nums和一个元素target, 数组不存在重复的元素，
 * 则将target插入数组nums中，并保持其有序性。
 * 如果数组中已经存在元素，则插入到其左方，
 * 请返回插入后target在数组中的索引
 */
function binarySearchInsertion(nums, target) {
  let left = 0,
  right = nums.length - 1;
  while(left <= right) {
    const mid = left + ((right - left) >> 1);
    if(nums[mid] < target) {
      left = mid + 1;
    }else if(nums[mid] > target) {
      right = mid - 1;
    }else {
      return mid;
    }
  }
  return left;
}

//如果数组存在重复元素的情况
function binarySearchInsertion(nums, target) {
  let left = 0, 
    right = nums.length - 1;
  while(left <= right) {
    const mid = parseInt(left + ((right - left) >> 1));

    if(nums[mid] < target) {
      left = mid + 1;
    }else {
      right = mid - 1;
    }
  }
  return i;
}

//二分查找边界
/**
 * 给定一个长度n的有序数组nums，其中可能包含重复元素，
 * 请返回数组中最左一个元素target的索引
 * 如果数组中不存在target，返回-1
 */

function binarySearchLeftEdge(nums, target) {
  const i = binarySearchInsertion(nums, target);
  if(i === nums.length || nums[i] !== target) {
    return -1;
  }
  return i;
}

//找右边界
function binarySearchRightEdge(nums, target) {
  const i = binarySearchInsertion(nums, target);
  const j = i - 1;
  if(j === -1 || nums[j] !== target) {
    return -1;
  }
  return j;  
}