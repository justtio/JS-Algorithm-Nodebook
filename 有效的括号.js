// 栈数据结构的特点
function checkValidBrackets (str) {
    let stack = []
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    //需要过滤括号之间的其他字符, 依据题目要求不用，但是加上实用性更强
    str = str.replace(/[^(){}\[\]]/g, '');

    if(str.length % 2 !== 0) return false;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(' || str[i] === '[' || str[i] === '{') {
            stack.push(str[i])
        } else {
            let last = stack.pop()
            if (str[i] !== map[last]) {
                return false
            }
        }
    }
    return stack.length === 0;
}

// 利用replace方法去掉所有有效的括号，最后判断字符串是否为空
function isValid (s) {
    s = s.replace(/[^(){}\[\]]/g, '');
    if(s.length % 2 !== 0) return false;

    const len = s.length / 2;

    for (let i = 0; i < len; i++) {
        s = s.replace('()', '')
        s = s.replace('[]', '')
        s = s.replace('{}', '')
    }
    return s.length === 0;
}