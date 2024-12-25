/**
 * 题目描述：
 * 实现strStr()函数
 * 给定一个haystack字符串和一个needle字符串，
 * 在haystack字符串中找出needle字符串出现的第一个位置，
 * 如果不存在，返回-1
 * 示例1:
 * 输入: haystack = "hello", needle = "ll"
 * 输出: 2
 * 示例2:
 * 输入: haystack = "aaaaa", needle = "bba"
 * 输出: -1
 */

/**
 * KMP算法：当出现字符串不匹配时，
 * 可以记录一部分之前已经匹配的文本内容，
 * 利用这些信息避免从头再做匹配
 *
 * 前缀表：它是用来回退的，它记录了模式串与主串不匹配时，
 * 需要回退的最长匹配前缀的长度（模式串应该从哪开始重新匹配）
 * 它会记录下标i之前（包括i）的字符串，有多大长度的相同前缀后缀
 *
 * 前缀是指不包含最后一个字符的所有以第一个字符开头的连续子串
 * 后缀是指不包含第一个字符的所有以最后一个字符结尾的连续子串
 */

/**
 * 构造next数组
 * 1. 初始化
 * 2. 处理前后缀不相同的情况
 * 3. 处理前后缀相同的情况
 */

function getNext(s) {
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

function strStr(haystack, needle) {
  if (needle.length === 0) return 0;
  let next = getNext(needle);
  let j = -1;
  for (let i = 0; i < haystack.length; i++) {
    while (j >= 0 && haystack[i] !== needle[j + 1]) {
      j = next[j];
    }
    if (haystack[i] === needle[j + 1]) {
      if (j === needle.length - 2) {
        return i - j - 1;
      }
      j++;
    }
  }
  return -1;
}

//前缀不减一
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

function strStr(haystack, needle) {
  if (needle.length === 0) return 0;
  let next = getNext1(needle);
  let j = 0;
  for (let i = 0; i < haystack.length; i++) {
    while (j > 0 && haystack[i] !== needle[j]) {
      j = next[j - 1];
    }
    if (haystack[i] === needle[j]) {
      if (j === needle.length - 1) {
        return i - j;
      }
      j++;
    }
  }
  return -1;
}
