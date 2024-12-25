function maxProductCutting(n) {
  if(n < 3) {
    return 1 * (n - 1);
  }

  let a = Math.floor(n / 3);
  let b = n % 3;
  if(b === 1) {
    return Math.pow(3, a - 1) * 2 * 2;
  }
  if(b === 2) {
    return Math.pow(3, a) * 2;
  }

  return Math.pow(3, a);
}