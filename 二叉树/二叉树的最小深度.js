//递归法
function minDepth(root) {
  if(!root) return 0;
  const left = minDepth(root.left);
  const right = minDepth(root.right);
  if(!left || !right) return left + right + 1;
  return Math.min(left, right) + 1;
}

//迭代法
function minDepth(root) {
  if(!root) return 0;
  const queue = [root];
  let minDepth = 0;

  while(queue.length) {
    const levelSize = queue.length;
    minDepth++;
    for(let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);

      if(!node.left && !node.right) return minDepth;
    }
  }
  return minDepth;
}