function maxCapacity(ht) {
  let i = 0;
  let j = ht.length - 1;
  let res = 0;
  while(i < j) {
    const cap = Math.min(ht[j], ht[j]) * (j - i);
    res = Math.max(res, cap);

    if(ht[i] < ht[j]) {
      i += 1;
    }else {
      j -= 1;
    }
  }
  return res;
}