function reverseStr(s, k) {
  const len = s.length;
  let res = s.split('');
  for(let i = 0; i < len; i += 2 * k) {
    let left = i;
    let right = i + k - 1 < len ? i + k - 1 : len - 1;
    while(left < right) {
      [res[left], res[right]] = [res[right], res[left]];
      left++;
      right--;
    }
  }
  return res.join('');
}