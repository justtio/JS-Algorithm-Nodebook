/**
 * 给定一个二叉树的根节点 root，
 * 想象自己站在它的右侧，按照从顶部到底部的顺序，返回所有从右侧所能看到的节点值。
 * 返回从右侧所能看到的节点值。
 * 示例 1:
 * 输入: [1,2,3,null,5,null,4]
 * 输出: [1,3,4]
 * 示例 2:
 * 输入: [1]
 * 输出: [1]
 */

//广度优先搜索法
function rightSideView(root) {
  let result = [];
  if(!root) return result;
  let queue = [root]; //用于层级遍历的队列

  while(queue.length > 0) {
    let levelSize = queue.length;

    // 遍历当前层
    for(let i = 0; i < levelSize; i++) {
      let node = queue.shift();

      //如果是当前层的最后一个节点，加入结果
      if(i === levelSize - 1) {
        result.push(node.val);
      }

      // 将当前节点的所有子节点加入队列
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
  }
  return result;
}

// 深度优先搜索法
function rightSideView(root) {
  let result = [];
  function dfs(node, level) {
    if(!node) return;

    //如果是当前层的第一次访问，添加该节点
    if(result.length === level) {
      result.push(node.val);
    }

    //先访问右子树，确保右视图节点优先
    dfs(node.right, level + 1);
    dfs(node.left, level + 1);
  }
  dfs(root, 0);
  return result;
}