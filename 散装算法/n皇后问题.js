function backtrack(row, n, state, res, cols, diags1, diags2) {
  if(row === n) {
    res.push(state.map(row => row.slice()));
    return;
  }

  for(let col = 0; col < n; col++) {
    const diag1 = row - col + n - 1;
    const diag2 = row + col;
    if(cols[col] || diags1[diag1] || diags2[diag2]) continue;
    cols[col] = diags1[diag1] = diags2[diag2] = true;
    state[row][col] = 'Q';
    backtrack(row + 1, n, state, res, cols, diags1, diags2);
    state[row][col] = '#';
    cols[col] = diags1[diag1] = diags2[diag2] = false;
  }
}

function nQueens(n) {
  const state = new Array.from( {length: n }, () => new Array(n).fill('#'));
  const res = [];
  const cols = new Array(n).fill(false);
  const diags1 = new Array(2 * n - 1).fill(false);
  const diags2 = new Array(2 * n - 1).fill(false);
  backtrack(0, n, state, res, cols, diags1, diags2);
  return res;
}