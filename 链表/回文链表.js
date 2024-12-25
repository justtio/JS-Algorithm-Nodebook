function isPalindrome(head) {
  const arr = [];
  while(head) {
    arr.push(head.val);
    head = head.next;
  }
  return arr.join('') === arr.reverse().join('');
}