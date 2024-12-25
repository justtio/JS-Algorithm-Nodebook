/**
 * 编写一个函数，作用是将输入的字符串反转过来，输入的字符串以字符数组char[]的形式给出
 * 不要给另外的数组分配额外空间，你必须原地修改输入的数组
 * 示例
 * 输入：['h','e','l','l','o']
 * 输出：['o','l','l','e','h']
 */

function reverseString(s) {
  return s.split('').reverse().join('');
}

//双指针
function reverseString(s) {
  //定义前后指针
  let left = 0;
  let right = s.length - 1;
  while(left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
  return s;
}
