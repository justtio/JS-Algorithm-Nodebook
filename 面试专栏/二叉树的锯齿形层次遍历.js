/**
 * 给你二叉树的根节点root，
 * 返回其节点值的锯齿形层序遍历（Z 字形）。
 * 即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行
 * 示例:
 * 输入: [3,9,20,null,null,15,7]
 *    3
 *   / \
 *  9  20
 *    /  \
 *   15   7
 * 输出: [[3],[20,9],[15,7]]
 */

function zigzagLevelOrder(root) {
  if(!root) return [];

  let result = [];
  let queue = [root]; //使用队列存储节点
  let leftToRight = true; //是否从左到右

  while(queue.length > 0) {
    let levelSize = queue.length; //当前层的节点个数
    let levelValues = []; //储存当前层的节点值

    //依次处理当前层节点
    for(let i = 0; i < levelSize; i++) {
      let node = queue.shift(); //出队一个节点

      if(node.left) queue.push(node.left); // 左子节点入队
      if(node.right) queue.push(node.right); // 右子节点入队

      //依据当前层的方向，将节点值加入数组
      if(leftToRight) {
        levelValues.push(node.val);
      }else {
        levelValues.unshift(node.val); //如果是从右到左，将节点值加入数组的开头
      }
    }

    result.push(levelValues); //将当前层的节点值加入数组
    leftToRight = !leftToRight; //改变方向
  }
  return result;
}