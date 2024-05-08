//使用sort方法
function sortSquare(arr) {
  return arr.sort((a, b) => a * a - b * b);
}

// 使用双指针
function sortSquare(arr) {
  let res = [];
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    if (arr[left] * arr[left] > arr[right] * arr[right]) {
      res.unshift(arr[left] * arr[left]);
      left++;
    } else {
      res.unshift(arr[right] * arr[right]);
      right--;
    }
  }
  return res;
}