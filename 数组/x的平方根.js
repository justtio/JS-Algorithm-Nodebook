// 非负整数，计算x的平方根，只保留整数部分
// 二分查找
function mySqrt(x) {
    if (x === 0) return 0;
    let left = 2, right = x, mid;
    while (left < right) {
      mid = left + Math.floor((right - left) / 2);
      if (mid * mid > x) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    return left - 1;
}

const x = 4;
mySqrt(x); // Output: 2