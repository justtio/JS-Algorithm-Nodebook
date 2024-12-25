/**
 * 给定一个二叉树,返回它的 前序 遍历。
 *  示例:
 *  输入: [1,null,2,3]
 *   1
 *    \
 *     2
 *    /
 *   3
 *  输出: [1,2,3]
 *  进阶: 递归算法很简单,你可以通过迭代算法完成吗?
 */

//递归法
function preorderTraversal(root) {
  if(!root) return [];
  const left = preorderTraversal(root.left); //递归遍历左子树
  const right = preorderTraversal(root.right); //递归遍历右子树
  return [...root.val, ...left, ...right]; //返回前序遍历结果
}

//迭代法
function preorderTraversal(root) {
  let result = [];
  let stack = [root];

  while(stack.length > 0) {
    let node = stack.pop(); //获取栈顶元素
    result.push(node.val); //访问当前节点

    //先入右子树，再入左子树
    //这样左子树会先被访问到
    if(node.right) stack.push(node.right);
    if(node.left) stack.push(node.left);
  }
  return result;
}