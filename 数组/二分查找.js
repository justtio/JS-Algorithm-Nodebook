//要求数组是有序的并且无重复元素
// 二分查找区间定义一般有两种：左闭右开和左闭右闭

// 1. 左闭右开区间
function binarySearch1(nums, target) {
  let mid, left = 0, right = nums.length;

  while(left < right) {
    mid = left + ((right - left) >> 1);

    if(nums[mid] > target) {
      right = mid;
    }else if(nums[mid] < target) {
      left = mid + 1;
    }else {
      return mid;
    }
  }
  return -1;
}

// 2. 左闭右闭区间
function binarySearch2(nums, target) {
  let mid, left = 0, right = nums.length - 1;

  while(left <= right) {
    mid = left + ((right - left) >> 1);
    if(nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    }else {
      return mid;
    }
  }
  return -1;
}

function binarySearchT(nums, target) {
  let i = 0,
  j = nums.length - 1;
  while(i <= j) {
    const m = parseInt(i + ((j - i) >> 1));
    if(nums[m] < target) {
      i = m + 1;
    }else if(nums[m] > target) {
      j = m - 1;
    }else {
      return m;
    }
    return -1;
  }
}

function binarySearchLCRO(nums, target) {
  let i = 0,
  j = nums.length;
  while(i < j) {
    const m = parseInt(i + ((j - i) >> 1));
    if(nums[m] < target) {
      i = m + 1;
    }else if(nums[m] > target) {
      j = m;
    }else {
      return m;
    }
  }
  return -1;
}

//二分查找插入点（无重复元素）
function binarySearchInsertSimple(nums, target) {
  let i = 0,
  j = nums.length - 1;
  while(i <= j) {
    const m = parseInt(i + ((j - i) >> 1));
    if(nums[m] < target) {
      i = m + 1;
    }else if(nums[m] > target) {
      j = m - 1;
    }else {
      return m;
    }
  }
  return i;
}

//当有重复元素
function binarySearchInsertion(nums, target) {
  let i = 0,
    j = nums.length - 1;
  while(i <=j) {
    const m = Math.floor(i + ((j - i) >> 1));
    if(nums[m] < target) {
      i = m + 1;
    }else if(nums[m] > target) {
      j = m - 1;
    }else {
      return m - 1;
    }
    return i;
  }
}

//二分法查找边界
//二分法查找最左一个target
function binarySearchLeftEdge(nums, target) {
  const i = binarySearchInsertion(nums, target);
  if(nums[i] !== target || i === nums.length) return -1;
  return i;
}

//查找右边界
function binarySearchRightEdge(nums, target) {
  const i = binarySearchInsertion(nums, target);
  const j = i - 1;
  if(nums[j] !== target || j === -1) return -1;
  return j;
}