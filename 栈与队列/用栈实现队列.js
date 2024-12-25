/** 
 * 队列的特性就是先进先出
 * 使用栈实现队列的下列操作
 * push(x) -- 将一个元素放入队列的尾部
 * pop() -- 从队列首部移除元素
 * peek() -- 返回队列首部的元素
 * empty() -- 返回队列是否为空
 */

const MyQueue = function() {
  this.stackIn = [];
  this.stackOut = [];
}

MyQueue.prototype.push = function(x) {
  this.stackIn.push(x);
}

MyQueue.prototype.pop = function() {
  const size = this.stackOut.length;

  if(size) {
    return this.stackOut.pop();
  }

  while(this.stackIn.length) {
    this.stackOut.push(this.stackIn.pop());
  }
  return this.stackOut.pop();
}

MyQueue.prototype.peek = function() {
  const x = this.pop();
  this.stackOut.push(x);
  return x;
}

MyQueue.prototype.empty = function() {
  return !this.stackIn.length && !this.stackOut.length;
}