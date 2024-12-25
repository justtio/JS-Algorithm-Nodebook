/**
 * 计算给定二叉树的所有左叶子之和
 * 示例:
 *    3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 *    返回 24
 */

function sumOfLeftLeaves(root) {
  if(!root) return 0;
  let sum = 0;

  //检查左子节点是否为叶子节点
  if(root.left && !root.left.left && !root.left.right) {
    sum += root.left.val;
  }

  //递归检查左子树
  sum += sumOfLeftLeaves(root.left);
  //递归检查右子树
  sum += sumOfLeftLeaves(root.right);
  return sum;
}
