/**
 * 递归的三要素：
 * 1. 确定递归函数的参数和返回值：
 * 确实哪些参数是递归过程中需要处理的，那么就在递归函数里加上这个参数，
 * 并且还要明确每次递归的返回值是什么进而确定递归函数的返回类型
 * 2. 确定终止条件：
 * 3. 确定单层递归的逻辑
 */

// 递归法
function preorderTraversal(root) {
  if (!root) return [];

  const left = preorderTraversal(root.left);
  const right = preorderTraversal(root.right);
  return [root.val, ...left, ...right];
}

//迭代法
function preorderTraversal(root) {
  const stack = [root];
  const result = [];

  while(stack.length) {
    const node = stack.pop(); //弹出栈顶元素
    if(node) {
      result.push(node.val);
      //因为栈的特点先进后出，所以先将右子树入栈
      if(node.right) stack.push(node.right);
      if(node.left) stack.push(node.left);
    }
  }
  return result;
}