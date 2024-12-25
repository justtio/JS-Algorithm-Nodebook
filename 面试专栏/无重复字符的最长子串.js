/**
 * 给定一个字符串s，请找出其中不含有重复字符的最长子串的长度。
 * 示例
 * 输入: "abcabcbb"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "abc",所以其长度为 3。
 * 输入: "bbbbb"
 * 输出: 1
 * 解释: 因为无重复字符的最长子串是 "b",所以其长度为 1。
 * 输入: "pwwkew"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "wke",所以其长度为 3。
 *      请注意,你的答案必须是 子串 的长度,"pwke" 是一个子序列,不是子串。
 */

//解题思路分析
// 1. 以每个字符为中心，向两边拓展，拓展的过程中，不断更新最大长度
// 2. 遇到重复字符，则将左边界右移，直到遇到不重复字符

function lengthOfLongestSubstring(s) {
  let lastIndex = {}; //用来储存字符最后出现的位置
  let maxLength = 0; //最大子串的长度
  let left = 0; //窗口的左边界

  // 遍历字符串
  for (let right = 0; right < s.length; right++) {
    // 如果字符在当前窗口内已经出现，更新左边界
    if(lastIndex[s[right]] >= left) {
      left = lastIndex[s[right]] + 1;
    }

    //更新该字符串的最新位置
    lastIndex[s[right]] = right;

    //更新最大长度
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}

function lengthOfLongestSubString(s) {
  let charSet = new Set(); // 用来储存当前窗口字符
  let maxLength = 0; //记录最长子串的长度
  let left = 0; //窗口的左边界

  for(let right = 0; right < s.length; right++) {
    // 如果字符在当前窗口内已经出现，更新左边界
    while(charSet.has(s[right])) {
      charSet.delete(s[left]); // 删除左侧字符
      left++;
    }
    // 更新该字符串的最新位置
    charSet.add(s[right]);
    // 更新最大长度
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}
