/**
 * 给定一个数组nums，有一个大小为k的滑动窗口
 * 从数组的最左侧移动到数组的最右侧
 * 你只可以看到在滑动窗口内的k个数字
 * 每次移动只能向右移动一位
 * 返回滑动窗口中的最大值
 * 示例
 * 输入: nums = [1,3,-1,-3,5,3,6,7], k = 3
 * 输出: [3,3,5,5,6,7]
 * 解释:
 * 滑动窗口的位置
 * ----
 * [1  3  -1] -3  5  3  6  7
 *  1 [3  -1  -3] 5  3  6  7
 *  1  3 [-1  -3  5] 3  6  7
 *  1  3  -1 [-3  5  3] 6  7
 *  1  3  -1  -3 [5  3  6] 7
 *  1  3  -1  -3  5 [3  6  7]
 */

function maxSlidingWindow(nums, k) {
  //单调递减队列
  class MonoQueue {
    queue;
    constructor() {
      this.queue = [];
    }

    enqueue(value) {
      let back = this.queue[this.queue.length - 1]; //队列的尾部
      while(back !== undefined && back < value) {
        this.queue.pop();
        back = this.queue[this.queue.length - 1];
      }
      this.queue.push(value);
    }

    dequeue(value) {
      let front = this.front();
      if(front === value) {
        this.queue.shift();
      }
    }

    front() {
      return this.queue[0];
    }
  }
  let helperQueue = new MonoQueue();
  let i = 0, j = 0;
  let resArr = [];
  while(j < k) {
    helperQueue.enqueue(nums[j]);
    j++;
  }
  resArr.push(helperQueue.front());
  while(j < nums.length) {
    helperQueue.enqueue(nums[j]);
    helperQueue.dequeue(nums[i]);
    resArr.push(helperQueue.front());
    i++, j++;
  }
  return resArr;
}

function maxSlidingWindow(nums, k) {
  const result = [];
  const queue = []; // 队列
  for (let i = 0; i < nums.length; i++) {
    // 入队
    while(queue.length && nums[i] >= nums[queue[queue.length - 1]]) {
      queue.pop();
    }
    queue.push(i);
    //出队
    if(queue[0] <= i - k) {
      queue.shift();
    }
    //结果
    if(i >= k - 1) {
      result.push(nums[queue[0]]);
    }
  }
  return result;
}

function maxSlidingWindow(nums, k) {
  if(nums.length === 0 || k === 0) return [];
  class MonoQueue {
    constructor() {
      this.queue = [];
    }

    //插入新元素，保持队列递减顺序
    enqueue(value) {
      while(this.queue.length > 0 && this.queue[this.queue.length - 1] < value) {
        this.queue.pop(); //删除比当前元素小的元素
      }
      this.queue.push(value);
    }

    //弹出队头元素
    dequeue(value) {
      return this.queue.shift();
    }

    //获取队头元素
    peek() {
      return this.queue[0];
    }

    //获取队列长度
    size() {
      return this.queue.length;
    }
  }

  const result = [];
  const monoQueue = new MonoQueue();

  for(let i = 0; i < nums.length; i++) {
    //将当前元素加入队列
    monoQueue.enqueue(nums[i]);
    // 如果当前索引i >= k - 1, 说明窗口已满，记录当前队头元素
    if(i >= k - 1) {
      //确保队列中元素是当前窗口内的
      //如果队头元素的索引不在窗口范围内，就将其弹出
      if(monoQueue.peek() === nums[i - k]) {
        monoQueue.dequeue();
      }

      //记录当前窗口最大值
      result.push(monoQueue.peek());
    }
  }
  return result;
}

function maxSlidingWindow(nums, k) {
  if(nums.length === 0 || k === 0) return [];
  
  const result = [];
  const monoQueue = [];

  for(let i = 0; i < nums.length; i++) {
    //移除不在当前窗口内的元素
    if(monoQueue.length && monoQueue[0] <= i - k) {
      monoQueue.shift(); // 弹出超出当前窗口的元素
    }

    // 移除所有比当前元素小的队尾元素
    while(monoQueue.length && nums[monoQueue[monoQueue.length - 1]] < nums[i]) {
      monoQueue.pop(); // 弹出队尾元素
    }

    // 将当前元素的索引加入队尾
    monoQueue.push(i);

    // 如果窗口已满，记录当前窗口的最大值
    if(i >= k - 1) {
      result.push(nums[monoQueue[0]]);
    }
  }
  return result;
}