/**
 * 给定一棵二叉树root，返回它的中序遍历。
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
 * 提示:
 * 树中节点数目在范围 [0, 100] 内
 * -100 <= Node.val <= 100
 */

//递归
function inorderTraversal(root) {
  if (!root) return [];
  const left = inorderTraversal(root.left);
  const right = inorderTraversal(root.right);
  return [...left, root.val, ...right];
}

//迭代
function inorderTraversal(root) {
  const stack = [];
  const result = [];
  let current = root;

  while(current || stack.length) {
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