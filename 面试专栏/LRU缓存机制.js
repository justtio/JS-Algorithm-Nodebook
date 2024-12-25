/**
 * 请你设计并实现一个 LRU 缓存机制 。
 * 实现 LRUCache 类:
 * LRUCache(int capacity) 以 正整数 作为容量 capacity 初始化 LRU 缓存
 * int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
 * void put(int key, int value) 如果关键字已经存在，则变更其数据值，否则插入该组「关键字-值」。
 * 函数 get 和 put 必须以 O(1) 的平均时间复杂度运行。
 * 示例:
 * 输入
 * ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
 * [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
 * 输出
 * [null, null, null, 1, null, -1, null, -1, 3, 4]
 * 解释
 * LRUCache lRUCache = new LRUCache(2);
 * lRUCache.put(1, 1); // 缓存是 {1=1}
 * lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
 * lRUCache.get(1);    // 返回 1
 * lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
 * lRUCache.get(2);    // 返回 -1 (未找到)
 */
/**
 * 为了更高效地实现LRU，我们需要维护两个数据结构:
 * 1.哈希表
 * 用于存储key和value对
 * 可以在常数时间内进行查找、插入和删除操作
 * 2.双向链表
 * 用于保持元素的访问顺序，最近使用的元素放在链表头部
 * 最不常访问的元素放在链表尾部
 * 通过链表节点的移动，可以方便地实现LRU算法
 */

//双向链表节点类
class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

//双向链表类，用于管理缓存的使用顺序
class DoublyLinkedList {
  constructor() {
    this.head = new Node(0, 0); 
    this.tail = new Node(0, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  //将节点移动到链表头部
  moveToHead(node) {
    this.removeNode(node);
    this.addToHead(node);
  }

  //将节点添加到头部
  addToHead(node) {
    node.prev = this.head; //将前置指针指向头结点
    node.next = this.head.next; //将后置指针指向原头结点的下一个结点
    this.head.next.prev = node; //将原头结点的下一个结点的前置指针指向新结点
    this.head.next = node; //将头结点的下一个结点指向新结点
  }

  //移除节点
  removeNode(node) {
    const prev = node.prev;
    const next = node.next;
    prev.next = next;
    next.prev = prev;
  }

  //移除尾部节点（即最久未使用的节点）
  removeTail() {
    const res = this.tail.prev;
    this.removeNode(res);
    return res;
  }
}

//LRU 缓存实现
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity; //缓存容量
    this.cache = new Map(); // 哈希表存储key和value
    this.list = new DoublyLinkedList(); //双向链表
  }

  //获取缓存中的值
  get(key) {
    if(!this.cache.has(key)) return -1; //如果缓存中没有该key，则返回-1
    //如果存在，先通过哈希表拿到节点，移动到链表头部
    this.list.moveToHead(this.cache.get(key));
    return this.cache.get(key).value;
  }

  //插入缓存
  put(key, value) {
    if(this.cache.has(key)) {
      // 如果键已存在，更新值，并移动节点到链表头部
      this.cache.get(key).value = value;
      this.list.moveToHead(this.cache.get(key));
    }else {
      // 如果键不存在，创建新节点并添加到链表头部
      const newNode = new Node(key, value);
      this.cache.set(key, newNode);
      this.list.addToHead(newNode);
      // 如果缓存超出容量，移除尾部节点
      if(this.cache.size > this.capacity) {
        const tail = this.list.removeTail();
        this.cache.delete(tail.key); //从缓存中删除该键
      }
    }
  }
}