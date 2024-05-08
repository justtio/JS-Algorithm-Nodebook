var MinStack = function() {
    this.stack = [];
    this.minStack = [Infinity];
}

MinStack.prototype.push = function(val) {
    this.stack.push(val);
    this.minStack.push(Math.min(this.minStack[this.minStack.length - 1], val));
};

MinStack.prototype.pop = function() {
    this.stack.pop();
    this.minStack.pop();
}

MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
}

MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1];
}   

// 不使用额外空间
var MinStack = function() {
    this.stack = [];
    this.min = Infinity;
}

MinStack.prototype.push = function(val) {
    if(val <= this.min) {
        this.stack.push(this.min);
        this.min = val;
    }
    this.stack.push(val);
}

MinStack.prototype.pop = function() {
    if(this.stack.pop() === this.min) {
        this.min = this.stack.pop();
    }
}

MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
}

MinStack.prototype.getMin = function() {
    return this.min;
}
