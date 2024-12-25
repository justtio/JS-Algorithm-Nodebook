class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    while(index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if(this.heap[index] <= this.heap[parentIndex]) break;
      [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
      index = parentIndex;
    }
  }

  extractMin() {
    if(this.heap.length === 0) return null;
    const min = this.heap[0];
    const end = this.heap.pop();
    if(this.heap.length > 0) {
      this.heap[0] = end;
      this.bubbleDown();
    }
    return min;
  }

  bubbleDown() {
    let index = 0;
    const length = this.heap.length;
    const element = this.heap[0];
    while(true) {
      const l = 2 * index + 1;
      const r = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if(l < length) {
        leftChild = this.heap[l];
        if(leftChild < element) {
          swap = l;
        }
      }

      if(r < length) {
        rightChild = this.heap[r];
        if((swap === null && rightChild < element) || (swap !== null && rightChild < leftChild)) {
          swap = r;
        }
      }
      if(swap === null) break;
      this.heap[index] = this.heap[swap];
      this.heap[swap] = element;
      index = swap;
    }
  }
}

function findKthLargest(nums, k) {
  const minHeap = new MinHeap();
  for(let num of nums) {
    if(minHeap.heap.length < k) {
      minHeap.insert(num);
    }else if (num > minHeap.heap[0]) {
      minHeap.extractMin();
      minHeap.insert(num);
    }
  }
  return minHeap.heap;
}