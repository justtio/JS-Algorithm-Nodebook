//递归法
function maxDepth(root) {
  if(!root) return 0;
  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);
  return Math.max(leftDepth, rightDepth) + 1;
}

//迭代法
function maxDepth(root) {
  if(!root) return 0;
  const queue = [root];
  let maxDepth = 0;

  while(queue.length) {
    const levelSize = queue.length;
    for(let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
    maxDepth++;
  }
  return maxDepth;
}