function dfs(preOrder, inOrderMap, i, left, right) {
  if(left > right) {
    return null;
  }
  const root = new TreeNode(preOrder[i]);
  const m = inOrderMap.get(preOrder[i]);
  root.left = dfs(preOrder, inOrderMap, i + 1, left, m - 1);
  root.right = dfs(preOrder, inOrderMap, i + m - left + 1, m + 1, right);
  return root;
}

function buildTree(preOrder, inOrder) {
  const inOrderMap = new Map();
  for(let i = 0; i < inOrder.length; i++) {
    inOrderMap.set(inOrder[i], i);
  }
  return dfs(preOrder, inOrderMap, 0, 0, inOrder.length - 1);
}