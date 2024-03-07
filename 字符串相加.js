// 竖式加法，需要考虑进位处理
function addStrings(num1, num2) {
    let i = num1.length - 1,
        j = num2.length - 1,
        carry = 0,
        ans = [];

    while(i >= 0 || j || >= 0 || carry !== 0) {
        // 字符串相减会默认转换成数字相减
        let x = i >= 0 ? num1[i] - '0' : 0,
            y = j >= 0 ? num2[j] - '0' : 0,
            result = x + y + carry;
        // 取余
        ans.push(result % 10);
        // 进位
        carry = Math.floor(result / 10);
        i--;
        j--;
    }
    return ans.reverse().join('');
}