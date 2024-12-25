/**
 * 给出由小写字母组成的字符串S，重复项删除操作会选择两个相邻且相同的字母
 * 并且删除他们，直到字符串不能继续删除。
 * 在完成所有重复项删除操作后返回最终的字符串。
 * 示例
 * 输入:"abbaca"
 * 输出:"ca"
 * 解释:
 * 先删除 "bb" 后剩下 "aaca",接着删除 "aaaa" 最后剩下 "ca"
 */

function removeDuplicate(s) {
  const result = [];
  for(const i of s) {
    if(result[result.length - 1] === i) {
      result.pop();
    }else {
      result.push(i);
    }
  }
  return result.join('');
}

//使用双指针模拟栈
function removeDuplicate(s) {
  s = [...s];
  let top = -1; // 栈顶指针
  for(let i = 0; i < s.length; i++) {
    if(top === -1 || s[top] !== s[i]) { // 如果栈为空或栈顶元素不等于当前元素
      top++;
      s[top] = s[i]; // 将当前元素入栈
    }else {
      top--; // 如果栈顶元素等于当前元素，则出栈
    }
  }
  s.length = top + 1; // 栈顶元素下标+1为栈的长度。
  return s.join('');
}