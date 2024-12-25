/**
 * 给定一个非空的整数数组，返回其中出现频率前k高的元素
 * 示例1
 * 输入：nums = [1, 1, 1, 2, 2, 3]; k = 2;
 * 输出：[1, 2]
 */ 

//实现优先队列
class Heap {
  constructor(compareFn) {
    this.compareFn = compareFn;
    this.queue = [];
  }

  push(item) {
    this.queue.push(item);

    let index = this.size() - 1; //记录推入元素下标
    let parent = Math.floor((index - 1) / 2); //记录父节点下标

    while(parent >= 0 && this.compare(parent, index) > 0) {
      [this.queue[index], this.queue[parent]] = [this.queue[parent], this.queue[index]];

      //更新下标
      index = parent;
      parent = Math.floor((index - 1) / 2);
    }
  }

  //获取堆顶元素并移除
  pop() {
    //边界情况，只有一个元素或没有元素应该直接弹出
    if(this.size() <= 1) {
      return this.queue.pop();
    }

    //堆顶元素
    const out = this.queue[0];

    //移除堆顶元素，填入最后一个元素
    this.queue[0] = this.queue.pop();

    let index = 0;
    let left = 1;
    let searchChild = this.compare(left, left + 1) > 0 ? left + 1 : left;

    while(this.compare(index, searchChild) > 0) {
      [this.queue[index], this.queue[searchChild]] = [this.queue[searchChild], this.queue[index]];

      index = searchChild;
      left = 2 * index + 1;
      searchChild = this.compare(left, left + 1) > 0 ? left + 1 : left;
    }

    return out;
  }

  size() {
    return this.queue.length;
  }

  compare(index1, index2) {
    if(this.queue[index1] === undefined) return 1;
    if(this.queue[index2] === undefined) return -1;

    return this.compareFn(this.queue[index1], this.queue[index2])
  }
}

const topKFrequeue = function(nums, k) {
  const map = new Map();

  for(const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  //创建小顶堆
  const heap = new Heap((a, b) => a[1] - b[1]);

  for(const entry of map.entries()) {
    heap.push(entry);

    if(heap.size() > k) {
      heap.pop();
    }
  }

  const res = [];

  for(let i = heap.size() - 1; i >= 0; i--) {
    res[i] = heap.pop()[0];
  }
  return res;
}

function topKFrequeue(nums, k) {
  const countMap = new Map();
  for(let num of nums) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }

  return [...countMap.entries()]
  .sort((a, b) => a[1] - b[1])
  .slice(0, k)
  .map(i => i[0]);
}

//实现优先队列（最小堆）
class Heap {
  constructor(compareFn) {
    this.compareFn = compareFn; //比较函数
    this.queue = []; //队列，储存堆元素的数组
  }

  push(item) {
    this.queue.push(item); //将元素添加到堆中

    let index = this.size() - 1; //新元素的索引
    let parent = Math.floor((index - 1) / 2); //父节点索引

    //向上调整堆，确保堆的性质
    while(parent >= 0 && this.compareFn(this.queue[index], this.queue[parent]) < 0) {
      // 如果当前元素小于父节点，交换
      [this.queue[index], this.queue[parent]] = [this.queue[parent], this.queue[index]];

      //更新索引
      index = parent;
      parent = Math.floor((index - 1) / 2);
    }
  }

  pop() {
    if(this.size() === 0) return null;

    //取出堆顶元素
    const root = this.queue[0];

    //使用最后一个元素替换堆顶
    const last = this.queue.pop();
    if(this.size() > 0) {
      this.queue[0] = last;

      //向下调整堆
      this._heapify(0);
    }

    return root;
  }

  _heapify(index) {
    let left = 2 * index + 1;
    let right = 2 * index + 2;
    let smallest = index;

    //比较左右子节点，找到最小值
    if(left < this.size() && this.compareFn(this.queue[left], this.queue[smallest]) < 0) {
      smallest = left;
    }
    if(right < this.size() && this.compareFn(this.queue[right], this.queue[smallest]) < 0) {
      smallest = right;
    }

    if(smallest !== index) {
      //如果最小值不是当前节点，交换
      [this.queue[index], this.queue[smallest]] = [this.queue[smallest], this.queue[index]];
      
      //继续向下调整
      this._heapify(smallest);
    }
  }
  size() {
    return this.queue.length;
  }
}

//主算法：返回出现频率前k高的元素
function topKFrequeue(nums, k) {
  const frequencyMap = new Map();

  // 统计每个字数的出现频率
  for(const num of nums) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }

  // 创建一个最小堆，按照频率排序
  const minHeap = new Heap((a, b) => a[1] - b[1]);

  // 将频率和元素作为元祖推入堆中
  for(const [num, freq] of frequencyMap) {
    minHeap.push([num, freq]);

    //保证堆的大小不超过k
    if(minHeap.size() > k) {
      minHeap.pop(); // 弹出堆顶，即频率最小的元素
    }
  }
  // 堆中的元素就是前k个高频元素
  const result = [];
  while(minHeap.size() > 0) {
    result.push(minHeap.pop()[0]); // 取出元素
  }

  return result;
}

//使用桶排序
function topKFrequeue(nums, k) {
  const frequencyMap = new Map();
  for(const num of nums) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }

  //创建桶，桶的索引表示频率
  const buckets = new Array(nums.length + 1).fill(null).map(() => []);

  //将元素放入桶中
  for(const [num, freq] of frequencyMap) {
    buckets[freq].push(num);
  }

  // 从桶中按频率降序遍历，直到找到前k个频率元素
  const result = [];
  for(let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
    for(const num of buckets[i]) {
      result.push(num);
      if(result.length === k) return result;
    }
  }

  return result;
}

function topKFrequeue(nums, k) {
  const frequencyMap = new Map();
  for(const num of nums) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }

  //将map转换成数组，按频率排序
  const sortedArray = Array.from(frequencyMap.entries()).sort((a, b) => a[1] - b[1]);

  //返回前k个频率元素
  return sortedArray.slice(0, k).map(item => item[0]);
}