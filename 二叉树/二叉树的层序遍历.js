//二叉树的层序遍历
function levelOrder(root) {
  if(!root) return [];
  const queue = [root];
  const result = [];

  while(queue.length) {
    const levelSize = queue.length; // 获取当前层的节点个数
    const level = []; // 用于存储当前层的节点

    for(let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      level.push(node.val);

      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
    result.push(level);
  }
  return result;
}

//二叉树的层序遍历II
/**
 * 给定一个二叉树，返回其节点值自底向上的层序遍历。
 * (即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历)
 */
function levelOrderBottom(root) {
  if(!root) return [];
  const queue = [root];
  const result = [];

  while(queue.length) {
    const levelSize = queue.length; // 获取当前层的节点个数
    const level = []; // 用于存储当前层的节点

    for(let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      level.push(node.val);
        
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
    result.unshift(level); // 将当前层的节点添加到结果数组的开头
  }
  return result;
}

//二叉树的右视图
/**
 * 给定一颗二叉树，想象自己站在它的右侧，
 * 按照从顶部到底部的顺序，返回从右侧所能看到的节点值。
 */
function rightSideView(root) {
  if(!root) return [];
  const queue = [root];
  const result = [];

  while(queue.length) {
    const levelSize = queue.length; // 获取当前层的节点个数
    const level = []; // 用于存储当前层的节点

    for(let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      level.push(node.val);

      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
    result.unshift(level[levelSize - 1]); // 将当前层的最右侧节点添加到结果数组的开头
  }
  return result;
}

//二叉树的层平均值
/**
 * 给定一个非空二叉树，返回一个由每层节点平均值组成的数组。
 */
function averageOfLevels(root) {
  if(!root) return [];
  const queue = [root];
  const result = [];

  while(queue.length) {
    const levelSize = queue.length; // 获取当前层的节点个数
    const level = []; // 用于存储当前层的节点

    for(let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      level.push(node.val);

      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
    result.push(level.reduce((acc, cur) => acc + cur) / levelSize);
  }
  return result;
}

//N叉树的层序遍历
/**
 * 给定一个N叉树，返回其节点值的层序遍历（从左到右，逐层遍历）。
 */
function levelOrder(root) {
  if(!root) return [];
  const queue = [root];
  const result = [];

  while(queue.length) {
    const levelSize = queue.length; // 获取当前层的节点个数
    const level = []; // 用于存储当前层的节点
      
      for(let i = 0; i < levelSize; i++) {
        const node = queue.shift();
        level.push(node.val);

        if(node.children) {
          for(let j = 0; j < node.children.length; j++) {
            queue.push(node.children[j]);
          }
        }
      }
      result.push(level);
  }
  return result;
}

//在每个树行中找最大值
/**
 * 给定一个二叉树，在二叉树的每一行中找到最大值。
 */
function largestValues(root) {
  if(!root) return [];
  const queue = [root];
  const result = [];

  while(queue.length) {
    const levelSize = queue.length; // 获取当前层的节点个数
    const level = []; // 用于存储当前层的节点

    for(let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      level.push(node.val);

      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
    result.push(Math.max(...level));
  }
  return result;
}

//填充每个节点的下一个右侧节点指针
/**
 * 给定一个完美二叉树，其所有叶子节点都在同一层，每个父节点都有两个子节点。
 * 填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。
 * 示例
 * 输入：[1,2,3,4,5,6,7]
 * 输出：[1,#,2,3,#,4,5,6,7,#]
 */
function connect(root) {
  if(!root) return null;
  const queue = [root];

  while(queue.length) {
    const levelSize = queue.length; // 获取当前层的节点个数
    const level = []; // 用于存储当前层的节点

    for(let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      level.push(node.val);

      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
    // 将当前层的节点链接在一起
    for(let i = 0; i < levelSize - 1; i++) {
      level[i].next = level[i + 1];
    }
  }
  return root;
}

//填充每个节点的下一个右侧节点指针II
/**
 * 给定一个二叉树，
 * 填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。
 * 示例
 * 输入：[1,2,3,4,5,null,7]
 * 输出: [1, #, 2, 3, #, 4, 5, 7, #]
 */
function connect(root) {
  if(!root) return null;
  const queue = [root];

  while(queue.length) {
    const levelSize = queue.length;

    for(let i = 0; i < levelSize; i++) {
      const node = queue.shift();

      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);

      if(i < levelSize - 1) {
        node.next = queue[0];
      }
    }
  }
  return root;
}

//二叉树的最大深度
/**
 * 给定一个二叉树，找出其最大深度。
 * 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
 * 说明：叶子节点是指没有子节点的节点。
 * 示例：
 * 给定二叉树 [3,9,20,null,null,15,7],
 *   3
 *  / \
 * 9  20
 *  /  \
 * 15   7
 * 返回它的最大深度 3
 */
function maxDepth(root) {
  if(!root) return 0;
  const left = maxDepth(root.left);
  const right = maxDepth(root.right);
  return Math.max(left, right) + 1;
}

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

//二叉树的最小深度
/**
 * 给定一个二叉树，找出其最小深度。
 * 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
 * 说明：叶子节点是指没有子节点的节点。
 * 示例
 * 给定二叉树 [3,9,20,null,null,15,7],
 *   3
 *  / \
 * 9  20
 *  /  \
 * 15   7
 * 返回它的最小深度 2
 */
function minDepth(root) {
  if(!root) return 0;
  const left = minDepth(root.left);
  const right = minDepth(root.right);
  if(!left || !right) return left + right + 1;
  return Math.min(left, right) + 1;
}

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
