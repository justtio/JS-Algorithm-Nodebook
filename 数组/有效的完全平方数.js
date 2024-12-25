// 本质上就是判断一个数是否可以写成某个整数的平方

function isPerfectSquare(num) {
  let left = 0;
  let right = num;
  while (left <= right) {
      let mid = left + Math.floor((right - left) / 2);
      let square = mid * mid;
      if (square === num) {
          return true;
      } else if (square < num) {
          left = mid + 1;
      } else {
          right = mid - 1;
      }
  }
  return false;
}