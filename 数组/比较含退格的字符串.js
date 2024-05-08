//使用栈数据结构
function backspaceCompare(s, t) {
    return helper(s) === helper(t);
}

function helper(str) {
  let stack = [];
  for(let char of str) {
    if(char !== '#') {
      stack.push(char);
    }else if(stack.length !== 0) {
      stack.pop();
    }
  }
  return stack.join('');
}

//使用双指针
function backspaceCompare(s, t) {
  let i = s.length - 1;
  let j = t.length - 1;
  while(i >= 0 || j >= 0) {
    i = nextValidCharIndex(s, i);
    j = nextValidCharIndex(t, j);

    if((i >= 0 && j >= 0 && s[i] === t[j]) || (i < 0 && j < 0)) {
      i--;
      j--;
    }else {
      return false;
    }
  }
  return true;
}

function nextValidCharIndex(str, index) {
  let backspaceCount = 0;
  while(index >= 0) {
    if(str[index] === '#') {
      backspaceCount++;
    }else if(backspaceCount > 0) {
      backspaceCount--;
    }else {
      break;
    }
    index--;
  }
  return index;
}