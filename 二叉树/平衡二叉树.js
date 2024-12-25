/**
 * 给定一个二叉树，判断它是否是高度平衡的二叉树。
 * 本题中，一棵高度平衡二叉树定义为：一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。
 * 示例:
 * 给定二叉树 [3,9,20,null,null,15,7]
 *  3
 *  / \
 * 9  20
 *   /  \
 *  15   7
 * 返回 true 。
 * 给定二叉树 [1,2,2,3,3,null,null,4,4]
 *    1
 *   / \
 *  2   2
 *  / \
 * 3   3
 * / \
 * 4   4
 * 返回 false
 */
//递归法
function isBalanced(root) {
  if(!root) return true; //空树是平衡的
  if(!isBalanced(root.left) || !isBalanced(root.right)) return false; //左右子树不平衡
  const left = maxDepth(root.left);
  const right = maxDepth(root.right);
  return Math.abs(left - right) <= 1;
}

function maxDepth(node) {
  if(!node) return 0;
  const left = maxDepth(node.left);
  const right = maxDepth(node.right);
  return Math.max(left, right) + 1;
}