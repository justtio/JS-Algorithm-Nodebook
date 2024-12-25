//递归法
function postorderTraversal(root) {
  if(!root) return [];
  const left = postorderTraversal(root.left);
  const right = postorderTraversal(root.right);
  return [...left, ...right, root.val];
}

//迭代法
function postorderTraversal(root) {
  if(!root) return [];
  const stack1 = [root]; // 用来模拟递归过程，确保遍历顺序
  const stack2 = []; // 用来储存节点，保证它们最后是按后序的顺序访问的
  const result = [];

  while(stack1.length) {
    const node = stack1.pop();
    stack2.push(node);

    if(node.left) stack1.push(node.left);
    if(node.right) stack1.push(node.right);
  }

  //将stack2中节点按后序顺序存入result
  while(stack2.length) {
    result.push(stack2.pop().val);
  }

  return result;
}