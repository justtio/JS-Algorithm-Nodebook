/**
 * 给你二叉树的根节点 root ,返回其节点值的 层序遍历 。 (即逐层地，从左到右访问所有节点)。
 * 示例 1:
 * 输入:root = [3,9,20,null,null,15,7]
 * 输出:[[3],[9,20],[15,7]]
 */

function levelOrder(root) {
  if(!root) return [];

  let result = [];
  let queue = [root]; //使用队列存储节点

  while(queue.length > 0) {
    let levelSize = queue.length; //当前层的节点数
    let levelNodes = []; //当前层的节点值

    //逐个处理当前层的节点
    for(let i = 0; i < levelSize; i++) {
      let node = queue.shift(); //取出当前层的第一个节点
      levelNodes.push(node.val); //将节点值加入当前层的节点值数组中

      //如果该节点有左子树，加入队列
      if(node.left) queue.push(node.left);
      //如果该节点有右子树，加入队列
      if(node.right) queue.push(node.right);
    }
    //将当前层的节点值数组加入结果数组
    result.push(levelNodes);
  }
  return result;
}