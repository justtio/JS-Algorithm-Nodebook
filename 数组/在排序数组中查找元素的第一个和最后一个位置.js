//寻找target在数组里左右边界有三种情况
// 1. target在数组范围的右边或者左边，例如[3, 4, 5] 2 / 6
// 2. target在数组范围中且数组中不存在target，例如[3, 6, 7] 5
// 3. target在数组范围中且数组中存在target，例如[3, 4, 5] 4 

function searchRange (nums, target) {
  const getLeftBorder = (nums, target)  => {
    let left = 0, right = nums.length - 1;
    let leftBorder = -2;
    while(left <= right) {
      let mid = left + ((right - left) >> 1);
      if(nums[mid] >= target) {
        right = mid - 1;
        leftBorder = right;
      }else {
        left = mid + 1;
      }
    }
    return leftBorder;
  }

  const getRightBorder = (nums, target) => {
    let left = 0, right = nums.length - 1;
    let rightBorder = -2;
    while(left <= right) {
      let mid = left + ((right - left) >> 1);
      if(nums[mid] > target) {
        right = mid - 1;
      }else {
        left = mid + 1;
        rightBorder = left;
      }
    }
    return rightBorder;
  }

  let leftBorder = getLeftBorder(nums, target);
  let rightBorder = getRightBorder(nums, target);

  // 情况1
  if(leftBorder === -2 || rightBorder === -2) return [-1, -1];
  // 情况3
  if(rightBorder - leftBorder > 1) return [leftBorder + 1, rightBorder - 1];
  // 情况2
  return [-1, -1];
}