/**
 * 栈的特性是先进后出
 * 使用队列实现栈的下列操作
 * push(x) -- 入栈
 * pop() -- 出栈
 * top() -- 获取栈顶元素
 * empty() -- 返回栈是否为空
 */
//使用两个队列实现
const MyStack = function() {
  this.queue1 = [];
  this.queue2 = [];
}

MyStack.prototype.push = function(x) {
  this.queue1.push(x);
}

MyStack.prototype.pop = function() {
  if(!this.queue1.length) {
    [this.queue1, this.queue2] = [this.queue2, this.queue1];
  }

  while(this.queue1.length > 1) {
    this.queue2.push(this.queue1.shift());
  }
  return this.queue1.shift();
}

MyStack.prototype.top = function() {
  const x = this.pop();
  this.queue1.push(x);
  return x;
}

MyStack.prototype.empty = function() {
  return !this.queue1.length && !this.queue2.length;
}

//使用一个队列
const MyStack1 = function() {
  this.queue = [];
}

MyStack1.prototype.push = function(x) {
  this.queue.push(x);
}

MyStack1.prototype.pop = function() {
  let size = this.queue.length;
  while(size > 1) {
    this.queue.push(this.queue.shift());
    size--;
  }
  return this.queue.shift();
}

Mystack1.prototype.top = function() {
  const x = this.pop();
  this.queue.push(x);
  return x;
}

MyStack1.prototype.empty = function() {
  return !this.queue.length;
}