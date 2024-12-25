//通过分治的思想解决汉诺塔问题
function move(src, tar) {
  const pan = src.pop();
  tar.push(pan);
}

function dfs(i, src, buf, tar) {
  if(i === 1) {
    move(src, tar);
    return;
  }

  dfs(i - 1, src, tar, buf);
  move(src, tar);
  dfs(i - 1, buf, src, tar);
}

function hanota(A, B, C) {
  dfs(A.length, A, B, C);
}