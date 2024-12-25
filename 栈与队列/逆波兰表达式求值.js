/**
 * 根据逆波兰表达法，求表达式的值
 * 有效运算符包括 + , - , * , / 。每个运算对象都可以是整数或者另一个逆波兰表达式
 * 说明：
 * 整数除法只保留整数部分
 * 给定逆波兰表达式总是有效的。换句话说，表达式总会得出有效数值
 * 且不存在除数为0的情况
 * 示例
 * 输入：4 13 5 / +
 * 输出：6
 */

function evalRPN(tokens) {
  const helperStack = [];
  const operatorMap = new Map([
    ['+', (a, b) => a + b],
    ['-', (a, b) => a - b],
    ['*', (a, b) => a * b],
    ['/', (a, b) => Math.trunc(a / b)],
  ])

  let a, b;
  for(const t of tokens) {
    if(operatorMap.has(t)) {
      b = helperStack.pop();
      a = helperStack.pop();
      helperStack.push(operatorMap.get(t)(a, b));
    }else {
      helperStack.push(parseInt(t));
    }
  }
  return helperStack.pop();
}