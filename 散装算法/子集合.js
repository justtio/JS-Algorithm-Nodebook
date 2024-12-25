//1. 无重复元素
//2. 元素可以被重复选取
function backtrack(state, target, total, choices, res) {
  if(total === target) {
    res.push([...state]);
    return;
  }
  for(let i = 0; i < choices.length; i++) {
    if(total + choices[i] > target) continue;
    state.push(choices[i]);
    backtrack(state, target, total + choices[i], choices, res);
    state.pop();
  }
}

function subsetSum(nums, target) {
  const res = [];
  const state = [];
  const total = 0;
  backtrack(state, target, total, nums, res);
  return res;
}

const testObj = {
  nums: [3, 4, 5],
  target: 9
}

console.log(subsetSum(testObj.nums, testObj.target));

// 子集的顺序不区分
function backtrack (state, target, choices, start, res) {
  if(target === 0) {
    res.push([...state]);
    return;
  }

  for(let i = start; i < choices.length; i++) {
    if(target < choices[i]) break;
    state.push(choices[i]);
    backtrack(state, target - choices[i], choices, i, res);
    state.pop();
  }
}

function subsetSum1(nums, target) {
  const res = [];
  nums.sort((a, b) => a - b);
  const start = 0;
  const state = [];
  backtrack(state, target, nums, start, res);
  return res;
}

//1. 集合中元素重复
//2. 集合中的元素只可使用一次
function backtrack(state, target, choices, start, res) {
  if(target === 0) {
    res.push([...state]);
    return;
  }

  for(let i = start; i < choices.length; i++) {
    if(i > start && choices[i] === choices[i - 1]) continue;
    if(target < choices[i]) break;
    state.push(choices[i]);
    backtrack(state, target - choices[i], choices, i + 1, res);
    state.pop();
  }
}

function subsetSum2(nums, target) {
  const state = [];
  const res = [];
  const start = 0;
  nums.sort((a, b) => a - b);
  backtrack(state, target, nums, start, res);
  return res;
}