/**
 * 给定一个二叉树，
 * 找到该树中两个指定节点的最近公共祖先。
 * 示例 1:
 * 输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
 * 输出: 3
 * 解释: 节点 5 和节点 1 的最近公共祖先是节点 3。
 * 示例 2:
 * 输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
 * 输出: 5
 * 解释: 节点 5 和节点 4 的最近公共祖先是节点 5。
 */

function lowestCommonAncestor(root, p, q) {
  // 如果当前节点为空或是p或q，则返回当前节点
  if(root === null || root === p || root === q) return root;

  //在左子树中查找
  const left = lowestCommonAncestor(root.left, p, q);
  //在右子树中查找
  const right = lowestCommonAncestor(root.right, p, q);

  //如果左右子树中均有返回值，说明p和q分别位于root的左右子树中，返回root
  if(left && right) return root;

  //否则就返回非空的子树
  return left || right;
}