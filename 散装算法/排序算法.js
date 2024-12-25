// 冒泡排序：从小到大
// 每次对比两个相邻数的大小
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

function bubbleSort2(arr) {
  //外循环，未排序的区间为[0, i]
  for(let i = arr.length - 1; i > 0; i--) {
    //内循环，将未排序区间[0, i]中最大的元素交换值该区间的最右侧
    for(let j = 0; j < i; j++) {
      if(arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr;
}

const testArr = [1, 4, 2, 5, 7, 3];
const resArr = bubbleSort2(testArr);

//选择排序
// 开启一个循环每轮都从未排序区间选择最小的元素，将其放在已排序区间的末尾
function selectionSort(nums) {
  const n = nums.length;
  for(let i = 0; i < n - 1; i++) {
    let k = i;
    for(let j = i + 1; j < n; j++) {
      if(nums[j] < nums[k]) {
        k = j;
      }
    }
  }
}

//插入排序
// 在未排序的区间选择一个基准元素，将该元素与左侧已排序区间的元素逐一比较大小，并将该元素插入到正确的位置
function insertionSort(arr) {
  //外循环，已排序区间为[0, i - 1]
  for(let i = 1; i < arr.lenght - 1; i++) {
    let base = arr[i];
    let j = i - 1;
    // 内循环：将base插入到已排序区间[0, i - 1]中的正确位置上
    while(j >= 0 && arr[j] > base) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = base;
  }
}

// 快速排序
// 选择基准元素，将所有比基准元素小的元素放在基准元素的左侧，所有比基准元素大的元素放在基准元素的右侧
function quickSort(arr) {
  if(arr.length <= 1) {
    return arr;
  }
  const pivot = arr[0];
  const left = [];
  const right = [];
  for(let i = 1; i < arr.length; i++) {
    if(arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

//优化快排的基准数
// 将数组中首尾和中点元素作为三个候选元素，将三个数的中间数作为基准数
function medianThree(arr, left, mid, right) {
  let l = arr[left],
    m = arr[mid],
    r = arr[right];
  
    if((l <= m && m <= r) || (r <= m && m <= l)) {
      return mid;
    }
      
    if((m <= l && l <= r) || (r <= l && l <= m)) {
      return left;
    }
    return right;
}

function quickSort2(arr) {
  if(arr.length <= 1) {
    return arr;
  }

  let med = medianThree(arr, 0, Math.floor(arr.length / 2), arr.length - 1);
  let pivot = arr[med];
  let left = [];
  let right = [];
  for(let i = 0; i < arr.length; i++) {
    if(i === med) {
      continue;
    }
    if(arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort2(left), pivot, ...quickSort2(right)];
}

const testArr2 = [1, 4, 2, 5, 7, 3];
const resArr2 = quickSort2(testArr2);
console.info(resArr2);

// 归并排序
// 将数组分成左右两部分，分别排序，然后再合并
function mergeSort(arr) {
  if(arr.length <= 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  while(left.length && right.length) {
    if(left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return result.concat(left, right);
}

//堆排序
// 输入数组，建立大顶堆
// 依次将堆顶元素与数组尾部元素交换，再将剩余数组重新建立大顶堆

function heapSort(arr) {
  const len = arr.length;
  for(let i = Math.floor(len / 2) - 1; i >= 0; i--) {
    heapify(arr, len, i);
  }
  for(let i = len - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }
}

function heapify(arr, len, i) {
  while(true) {
    let maxPos = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    if(left < len && arr[left] > arr[maxPos]) {
      maxPos = left;
    }
    if(right < len && arr[right] > arr[maxPos]) {
      maxPos = right;
    }
    if(maxPos === i) {
      break;
    }
    [arr[i], arr[maxPos]] = [arr[maxPos], arr[i]];
    i = maxPos;
  }
}

// 桶排序
// 桶排序是一种分配式排序算法
// 将数组分成若干个子数组，每个子数组中的元素都是相同的
// 然后依次对每个子数组排序，最后再将各个子数组合并
// 时间复杂度：O(n + b)
// 空间复杂度：O(n + b)
// 稳定性：稳定

function bucketSort(arr) {
  const buckets = new Array(arr.length).fill(0).map(() => []);
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const bucketSize = 5;
  const bucketCount = Math.floor((max - min) / bucketSize) + 1;
  for(let i = 0; i < arr.length; i++) {
    const bucketIndex = Math.floor((arr[i] - min) / bucketSize);
    buckets[bucketIndex].push(arr[i]);
  }
  for(let i = 0; i < bucketCount; i++) {
    insertionSort(buckets[i]);
  }
  return buckets.flat();
}

function bucketSort2(arr) {
  const k = arr.length / 2;
  const buckets = [];

  for(let i = 0; i < k; i++) {
    buckets[i] = [];
  }

  for(const num of arr) {
    const index = Math.floor(num * k);
    buckets[index].push(num);
  }

  for(const bucket of buckets) {
    bucket.sort((a, b) => a - b);
  }

  let i = 0;
  for(const bucket of buckets) {
    for(const num of bucket) {
      arr[i++] = num;
    }
  }
}

// 计数排序
// 通过统计元素数量来实现排序，通常用于整数数组

function countingSortNaive(arr) {
  let m = 0;
  for(const num of arr) {
    m = Math.max(m, num);
  }
  const counter = new Array(m + 1).fill(0);
  for(const num of arr) {
    counter[num]++;
  }
  let i = 0;
  for(let num = 0; num < m + 1; num++) {
    for(let j = 0; j < counter[num]; j++, i++) {
      arr[i] = num;
    }
  }
}

function countingSort(arr) {
  let m = Math.max(...arr);
  const counter = new Array(m + 1).fill(0);
  for(const num of arr) {
    counter[num]++;
  }
  for(let i = 0; i < m; i++) {
    counter[i + 1] += counter[i];
  }

  const n = arr.length;
  const res = new Array(n);
  for(let i = n - 1; i >= 0; i--) {
    res[counter[arr[i]] - 1] = arr[i];
    counter[arr[i]]--;
  }
  return res;
}

//基数排序
// 通过对数组元素的每位数进行排序
// 时间复杂度：O(d*(n+b))
// 空间复杂度：O(n+b)
// 稳定性：稳定

function radixSort(arr) {
  const max = Math.max(...arr);
  let exp = 1;
  while(max / exp > 0) {
    countSort(arr, exp);
    exp *= 10;
  }
}

function countSort(arr, exp) {
  const n = arr.length;
  const output = new Array(n);
  const count = new Array(10).fill(0);
  for(let i = 0; i < n; i++) {
    count[Math.floor(arr[i] / exp) % 10]++;
  }
  for(let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }
  for(let i = n - 1; i >= 0; i--) {
    output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
    count[Math.floor(arr[i] / exp) % 10]--;
  }
  for(let i = 0; i < n; i++) {
    arr[i] = output[i];
  }
}

//总结
//1. 冒泡排序：通过交换相邻元素实现排序。通过添加一个标记来实现提前返回
//我们可以将冒泡排序的最优时间复杂度从 O(n^2) 降低到 O(n)
//2. 插入排序：每轮将未排序区域中的元素插入到已排序区域中的正确位置
//插入排序在小数据量情况下是最快的排序算法
//3. 快速排序：通过哨兵划分操作来实现排序
//选定一个基准元素，将数组分成左右两部分，分别排序，然后再合并
// 哨兵的选择会影响排序的速度，因此通常会引入中位数来降低排序的时间复杂度，尾递归优化
//4. 归并排序：将数组分成左右两部分，分别排序，然后再合并
//时间复杂度：O(nlogn)，空间复杂度：O(n)
//5. 桶排序：将数组分成若干个子数组，每个子数组中的元素都是相同的
// 然后依次对每个子数组排序，最后再将各个子数组合并
// 时间复杂度：O(n + b)
// 空间复杂度：O(n + b)
// 稳定性：稳定
//6. 堆排序：通过堆数据结构来实现排序
// 时间复杂度：O(nlogn)
// 空间复杂度：O(1)
// 7. 计数排序：通过统计数据出现的次数来实现排序
// 时间复杂度：O(n+k)
// 8. 基数排序：通过对元素逐位排序来实现排序
// 时间复杂度：O(d*(n+b))