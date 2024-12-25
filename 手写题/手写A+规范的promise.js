const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class Promise {
    constructor(executor) {
        this.status = PENDING;
        this.value = undefined;
        this.reason = undefined;
        this.onResolvedCallbacks = [];
        this.onRejectedCallbacks = [];
        
        const resolve = (value) => {
            if (this.status === PENDING) {
                this.status = FULFILLED;
                this.value = value;
                this.onResolvedCallbacks.forEach((fn) => fn());
            }
        };
        
        const reject = (reason) => {
            if (this.status === PENDING) {
                this.status = REJECTED;
                this.reason = reason;
                this.onRejectedCallbacks.forEach((fn) => fn());
            }
        };
        
        try {
            executor(resolve, reject);
        } catch (error) {
            reject(error);
        }
    }
    
    then(onFulfilled, onRejected) {
      // 解决 onFufilled，onRejected 没有传值的问题
      onFulfilled = typeof onFulfilled === "function" ? onFulfilled : (value) => value;
      // 因为错误的值要让后面访问到，所以这里也要抛出错误，不然会在之后 then 的 resolve 中捕获
      onRejected = typeof onRejected === "function" ? onRejected : (err) => {
          throw err;
      };
      // 每次调用 then 都返回一个新的 promise
      const promise2 = new Promise((resolve, reject) => {
        if (this.status === FULFILLED) {
          //Promise/A+ 2.2.4 --- setTimeout
          setTimeout(() => {
              try {
                  const x = onFulfilled(this.value);
                  // x可能是一个proimise
                  resolvePromise(promise2, x, resolve, reject);
              } catch (e) {
                  reject(e);
              }
          }, 0);
        }
    
        if (this.status === REJECTED) {
          //Promise/A+ 2.2.3
          setTimeout(() => {
              try {
                  let x = onRejected(this.reason);
                  resolvePromise(promise2, x, resolve, reject);
              } catch (e) {
                  reject(e);
              }
          }, 0);
        }
        
        if (this.status === PENDING) {
          this.onResolvedCallbacks.push(() => {
              setTimeout(() => {
                  try {
                      let x = onFulfilled(this.value);
                      resolvePromise(promise2, x, resolve, reject);
                  } catch (e) {
                      reject(e);
                  }
              }, 0);
          });
      
          this.onRejectedCallbacks.push(() => {
              setTimeout(() => {
                  try {
                      let x = onRejected(this.reason);
                      resolvePromise(promise2, x, resolve, reject);
                  } catch (e) {
                      reject(e);
                  }
              }, 0);
          });
        }
      });
      
      return promise2;
    }
}

const resolvePromise = (promise2, x, resolve, reject) => {
  // 防止 promise2 循环引用
  if (promise2 === x) {
    return reject(
      new TypeError("Chaining cycle detected for promise #<Promise>")
    );
  }

  // 保证只能调用一次 resolve 或 reject
  let called = false;

  // 判断 x 是否是对象或函数
  if (x !== null && (typeof x === "object" || typeof x === "function")) {
    try {
      const then = x.then;
      if (typeof then === "function") {
        // 使用 then.call 来避免 x.then 被多次访问
        then.call(
          x,
          (y) => handleResolve(y),
          (r) => handleReject(r)
        );
      } else {
        resolve(x); // 如果没有 then，直接 resolve
      }
    } catch (e) {
      if (!called) {
        called = true;
        reject(e); // 捕获异常，调用 reject
      }
    }
  } else {
    resolve(x); // 如果是普通值，直接 resolve
  }

  // 处理 resolve 的递归
  function handleResolve(y) {
    if (called) return;
    called = true;
    resolvePromise(promise2, y, resolve, reject); // 递归解析
  }

  // 处理 reject
  function handleReject(r) {
    if (called) return;
    called = true;
    reject(r); // 只要失败就 reject
  }
};

// promise.js
// 这里是上面写的 Promise 全部代码
Promise.defer = Promise.deferred = function () {
    let dfd = {}
    dfd.promise = new Promise((resolve,reject)=>{
        dfd.resolve = resolve;
        dfd.reject = reject;
    });
    return dfd;
}
module.exports = Promise;
