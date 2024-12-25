//单链表
var MyLinkedList = function () {
  this.size = 0;
  this.head = new ListNode(0);
};

MyLinkedList.prototype.get = function(index) {
  if(index < 0 || index >= this.size) return -1;
  let cur = this.head;
  for(let i = 0; i <= index; i++) {
    cur = cur.next;
  }
  return cur.val;
}

MyLinkedList.prototype.addAtHead = function(val) {
  this.addAtIndex(0, val);
}

MyLinkedList.prototype.addAtTail = function(val) {
  this.addAtIndex(this.size, val);
}

MyLinkedList.prototype.addAtIndex = function(index, val) {
  if(index > this.size) return;
  this.size++;
  let cur = this.head;
  for(let i = 0; i < index; i++) {
    cur = cur.next;
  }
  let node = new ListNode(val);
  node.next = cur.next;
  cur.next = node;
}

MyLinkedList.prototype.deleteAtIndex = function(index) {
  if(index < 0 || index >= this.size) return;
  this.size--;
  let cur = this.head;
  for(let i = 0; i < index; i++) {
    cur = cur.next;
  }
  cur.next = cur.next.next;
}

function ListNode(val, next) {
  this.val = val ? val : 0;
  this.next = next ? next : null;
}

//双向链表
var MyLinkedList = function () {
  this.size = 0;
  this.head = new ListNode(0);
  this.tail = new ListNode(0);
  this.head.next = this.tail;
  this.tail.prev = this.head;
}

MyLinkedList.prototype.get = function(index) {
  if(index < 0 || index >= this.size) return -1;
  let cur;
  if(index <= this.size / 2) {
    cur = this.head;
    for(let i = 0; i < index; i++) {
      cur = cur.next;
    }
  }else {
    cur = this.tail;
    for(let i = 0; i < this.size - index - 1; i++) {
      cur = cur.prev;
    }
  }
  return cur.val;
}

MyLinkedList.prototype.addAtHead = function(val) {
  this.addAtIndex(0, val);
}

MyLinkedList.prototype.addAtTail = function(val) {
  this.addAtIndex(this.size, val);
}

MyLinkedList.prototype.addAtIndex = function(index, val) {
  if(index > this.size) return;
  let prev, next;
  if(index <= this.size / 2) {
    prev = this.head;
    for(let i = 0; i < index; i++) {
      prev = prev.next;
    }
    next = prev.next;
  }else {
    next = this.tail;
    for(let i = 0; i < this.size - index; i++) {
      next = next.prev;
    }
    prev = next.prev;
  }
  let node = new ListNode(val);
  prev.next = node;
  next.prev = node;
  node.next = next;
  node.prev = prev;
  this.size++;
}

MyLinkedList.prototype.deleteAtIndex = function(index) {
  if(index < 0 || index >= this.size) return;
  let prev, next;
  if(index <= this.size / 2) {
    prev = this.head;
    for(let i = 0; i < index; i++) {
      prev = prev.next;
    }
    next = prev.next.next;
  }else {
    next = this.tail;
    for(let i = 0; i < this.size - index - 1; i++) {
      next = next.prev;
    }
    prev = next.prev.prev;
  }
  prev.next = next;
  next.prev = prev;
  this.size--;
}

function ListNode(val, next, prev) {
  this.val = val ? val : 0;
  this.next = next ? next : null;
  this.prev = prev ? prev : null;
}