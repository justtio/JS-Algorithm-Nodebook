/**
 * 给定一个二叉树的根节点 root,
 * 返回它的 中序 遍历。
 * 示例 1:
 * 输入:root = [1,null,2,3]
 * 输出:[1,3,2]
 * 示例 2:
 * 输入:root = []
 * 输出:[]
 * 示例 3:
 * 输入:root = [1]
 * 输出:[1]
 * 示例 4:
 * 输入:root = [1,2]
 * 输出:[2,1]
 * 示例 5:
 * 输入:root = [1,null,2]
 * 输出:[1,2]
 */

//递归法
function inorderTraversal(root) {
  if(!root) return [];
  const left = inorderTraversal(root.left); //递归遍历左子树
  const right = inorderTraversal(root.right); //递归遍历右子树
  return [...left, root.val, ...right]; //返回中序遍历结果
}

//迭代法 适合大数据结构
function inorderTraversal(root) {
  let result = [];
  let stack = [];

  while(current || stack.length > 0) {
    //遍历左子树
    while(current) {
      stack.push(current);
      current = current.left;
    }

    //当前节点为空，访问栈顶元素
    current = stack.pop();
    result.push(current.val);

    //遍历右子树
    current = current.right;
  }
  return result;
}