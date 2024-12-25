/**
 * 给定一个二叉树, 返回所有从根节点到叶子节点的路径
 * 示例:
 * 输入:
 *   1
 *  /   \
 * 2     3
 *  \
 *   5
 * 输出: ["1->2->5", "1->3"]
 * 解释: 所有根节点到叶子节点的路径为: 1->2->5, 1->3
 */

function binaryTreePaths(root) {
  const result = [];

  function dfs(node, path) {
    if(!node) return;

    //将当前节点的值加到路径上
    path += node.val;

    //如果是叶子节点，保存当前路径
    if(!node.left && !node.right) {
      result.push(path);
    }else {
      //如果有左叶子节点，递归遍历
      if(node.left) dfs(node.left, path + '->');
      //如果有右叶子节点，递归遍历
      if(node.right) dfs(node.right, path + '->');
    }
  }
  
  dfs(root, '');
  return result;
}

