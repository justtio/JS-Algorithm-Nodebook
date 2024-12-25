/**
 * 翻转一颗二叉树
 * 示例：
 *    4
 *    /   \
 *   2     7
 *  / \   / \
 * 1   3 6   9
 * 翻转后
 *    4
 *    /   \
 *   7     2
 *  / \   / \
 * 9   6 3   1  
 */

function invertTree(root) {
  if(!root) return null;

  const left = invertTree(root.left);
  const right = invertTree(root.right);

  root.left = right;
  root.right = left;

  return root;
}

//迭代法
function invertTree(root) {
  if(!root) return null;

  const stack = [root];

  while(stack.length) {
    const node = stack.pop();

    //交换左右子树
    const temp = node.left;
    node.left = node.right;
    node.right = temp;

    if(node.left) stack.push(node.left);
    if(node.right) stack.push(node.right);
  }

  return root;
}

//使用层序遍历
function invertTree(root) {
  if(!root) return null;
  const queue = [root];

  while(queue.length) {
    const node = queue.shift();
    const temp = node.left;
    node.left = node.right;
    node.right = temp;

    if(node.left) queue.push(node.left);
    if(node.right) queue.push(node.right);
  }
  return root;
}