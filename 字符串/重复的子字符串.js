/**
 * 给定一个非空的字符串，判断它是否可以由他的一个子串重复多次构成，
 * 给定的字符串只含有小写英文字母，并且长度不超过10000。
 * 
 * 示例 1：
 * 输入："abab"
 * 输出：True
 * 
 * 示例 2：
 * 输入："aba"
 * 输出：False
 */
// 若next[len - 1] != -1, 说明字符串有最长相同的前后缀
// 最长相等前后缀长度为： next[len - 1] + 1
// 最长相等前后缀长度为： len - next[len - 1] - 1
// 如果 len % (len - next[len - 1] - 1) == 0, 则说明数组长度正好可以被最长相等前后缀不包含子串的长度整除
// 说明该字符串有重复的子字符串;
//前缀表统一减一
const getNext = (s) => {
  let next = [];
  let j = -1;
  next[0] = j;
  for(let i = 1; i < s.length; i++) {
    while(j >= 0 && s[i] !== s[j + 1]) {
      j = next[j];
    }
    if(s[i] === s[j + 1]) {
      j++;
    }
    next[i] = j;
  }
  return next;
}

function repeatedSubstringPattern(s) {
  const next = getNext(s);
  const sLen = s.length;
  const nextLen = next.length;
  const suffixLen = next[nextLen - 1] + 1;
  return suffixLen > 0 && sLen % (sLen - suffixLen) === 0;
}

// 前缀表不减一
function getNext1(s) {
  let next = [];
  let j = 0;
  next[0] = j;
  for(let i = 1; i < s.length; i++) {
    while(j > 0 && s[i] !== s[j]) {
      j = next[j - 1];
    }
    if(s[i] === s[j]) {
      j++;
    }
    next[i] = j;
  }
  return next;
}

function repeatedSubstringPattern(s) {
  const next = getNext1(s);
  const sLen = s.length;
  const nextLen = next.length;
  const suffixLen = next[nextLen - 1];
  return suffixLen > 0 && sLen % (sLen - suffixLen) === 0;
}

