// 双指针，滑窗思想，set数据结构，动态调整字符串长度
function longestSubStr(str) {
    let left = 0, right = 0, maxLen = 0;
    const set = new Set();

    while(right < str.length) {
        if(!set.has(str[right])){
            set.add(str[right]);
            maxLen = Math.max(maxLen, set.size);
            right++;
        }else {
            set.delete(str[left]);
            left++;
        }
    }
    return maxLen;
}