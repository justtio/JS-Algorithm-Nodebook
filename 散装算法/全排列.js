//无重复数组全排列
function backtrack(state, choices, selected, res) {
  if(state.length === choices.length) {
    res.push([...state]);
    return;
  }

  choices.forEach((choice, index) => {
    if(selected[index]) return;
    state.push(choice);
    selected[index] = true;
    backtrack(state, choices, selected, res);
    state.pop();
    selected[index] = false;
  });
}

function permutations(nums) {
  const res = [];
  const state = [];
  const selected = new Array(nums.length).fill(false);
  backtrack(state, nums, selected, res);
  return res;
}

const testArr = [1, 2, 3];
console.log(permutations(testArr));

//有重复元素全排列
function backtrack1(state, choices, selected, res) {
  if(state.length === choices.length) {
    res.push([...state]);
    return;
  }

  const duplicate = new Set();
  choices.forEach((choice, index) => {
    if(selected[index] || duplicate.has(choice)) return;
    state.push(choice);
    selected[index] = true;
    duplicate.add(choice);
    backtrack(state, choices, selected, res);
    state.pop();
    selected[index] = false;
  });
}

function permutations1(nums) {
  const res = [];
  const state = [];
  const selected = new Array(nums.length).fill(false);
  backtrack1(state, nums, selected, res);
  return res;
}

const testArr1 = [1, 1, 2];
console.log(permutations1(testArr1));