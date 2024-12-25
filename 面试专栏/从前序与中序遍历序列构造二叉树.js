/**
 * 给定两个整数数组preorder和inorder，
 * 其中preorder是二叉树的先序遍历，inorder是同一颗二叉树的中序遍历
 * 请构造二叉树并返回其根节点
 * 示例 1:
 * 输入: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
 * 输出: [3,9,20,null,null,15,7]
 * 示例 2:
 * 输入: preorder = [-1], inorder = [-1]
 * 输出: [-1]
 */

function buildTree(preorder, inorder) {
  if(preorder.length === 0 || inorder.length === 0) return null;

  let preorderIndex = 0;
  const inorderMap = new Map();

  //构建中序遍历的映射
  for(let i = 0; i < inorder.length; i++) {
    inorderMap.set(inorder[i], i);
  }

  function buildTreeHelper(start, end) {
    if(start > end) return null;

    //根据先序遍历的第一个节点，构建根节点
    const rootValue = preorder[preorderIndex++];
    const root = new TreeNode(rootValue);
  
    //找到中序遍历的根节点在中序遍历中的位置
    const inorderIndex = inorderMap.get(rootValue);
    //构建左子树
    root.left = buildTreeHelper(start, inorderIndex - 1);
    //构建右子树
    root.right = buildTreeHelper(inorderIndex + 1, end);
    return root;
  }

  return buildTreeHelper(0, inorder.length - 1);
}