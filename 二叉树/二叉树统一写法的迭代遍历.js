/**
 * 这种写法的核心在于通过栈和null标记节点的访问顺序
 */

//前序遍历
function preorderTraversal(root) {
  const stack = [];
  const result = [];
  if(root) stack.push(root);

  while(stack.length) {
    const node = stack.pop();
    if(!node) {
      result.push(stack.pop().val);
      continue;
    }
    if(node.right) stack.push(node.right);
    if(node.left) stack.push(node.left);
    stack.push(node);
    stack.push(null);
  };
  return result;
}

//中序遍历
function inorderTraversal(root) {
  const stack = [];
  const result = [];
  if(root) stack.push(root);

  while(stack.length) {
    const node = stack.pop();
    if(!node) {
      result.push(stack.pop().val);
      continue;
    }
    if(node.right) stack.push(node.right);
    stack.push(node);
    stack.push(null);
    if(node.left) stack.push(node.left);
  }
  return result;
}

//后序遍历
function postorderTraversal(root) {
  const stack = [];
  const result = [];
  if(root) stack.push(root);
  
  while(stack.length) {
    const node = stack.pop();
    if(!node) {
      result.push(stack.pop().val);
      continue;
    }
    stack.push(node);
    stack.push(null);
    if(node.right) stack.push(node.right);
    if(node.left) stack.push(node.left);
  }
  return result;
}