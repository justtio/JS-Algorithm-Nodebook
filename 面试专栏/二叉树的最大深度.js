/**
 * 给定一个二叉树root, 返回其最大深度
 * 最大深度是指从根节点到最远叶子节点的最长路径上的节点数量
 * 示例 1:
 * 输入: root = [3,9,20,null,null,15,7]
 * 输出: 3
 * 示例 2:
 * 输入: root = [1,null,2]
 * 输出: 2
 * 示例 3:
 * 输入: root = []
 * 输出: 0
 */

//深度优先搜索
function maxDepth(root) {
  if(!root) return 0;

  //递归计算左右子树的最大深度，取较大值 + 1;
  let leftDepth = maxDepth(root.left);
  let rightDepth = maxDepth(root.right);

  return Math.max(leftDepth, rightDepth) + 1;
}

//广度优先搜索
function maxDepth(root) {
  if(!root) return 0;
  let queue = [root];
  let depth = 0;

  while(queue.length > 0) {
    let levelSize = queue.length; //当前层节点数
    for(let i = 0; i < levelSize; i++) {
      let node = queue.shift();
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
    depth++;
  }
  return depth;
}