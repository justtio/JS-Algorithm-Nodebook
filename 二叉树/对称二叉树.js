/**
 * 给定一个二叉树，检查它是否镜像对称
 * 示例 1:
 * 输入：[1,2,2,3,4,4,3]
 * 输出:true
 * 示例 2:
 * 输入：[1,2,2,null,3,null,3]
 * 输出:false
 */
function isSymmetric(root) {
  if(!root) return true;

  //辅助函数，递归比较左右子树
  function isMirror(t1, t2) {
    if(!t1 && !t2) return true; // 两个都为空
    if(!t1 || !t2) return false; // 一个为空一个不为空
    
    // 判断当前节点值是否相等，并且递归比较左子树和右子树
    return t1.val === t2.val && 
    isMirror(t1.left, t2.right) && 
    isMirror(t1.right, t2.left);
  }

  return isMirror(root.left, root.right);
}