/**
 * 给出一个完全二叉树，求出该树的节点个数
 * 示例:
 * 输入：[1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
 * 输出：14
 */

//递归法
function countNodes(root) {
  if(!root) return 0;
  const left = countNodes(root.left);
  const right = countNodes(root.right);
  return left + right + 1;
}

//迭代法
function countNodes(root) {
  if(!root) return 0;
  const queue = [root];
  let count = 0;
  while(queue.length) {
    const node = queue.shift();
    count++;
    if(node.left) queue.push(node.left);
    if(node.right) queue.push(node.right);
  }
  return count;
}