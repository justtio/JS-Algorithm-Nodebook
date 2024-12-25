//使用sort方法
function sortSquare(arr) {
  return arr.sort((a, b) => a * a - b * b);
}

//有序数组，两边元素的平方肯定大于中间的元素的平方，含有负数

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

console.log(sortSquare([-4, -1, 0, 3, 10])); // [0, 1, 9, 16, 100]
console.log(sortSquare([-7, -3, 2, 3, 11])); // [4, 9, 9, 49, 121]