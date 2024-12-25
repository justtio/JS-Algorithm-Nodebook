function reverseBetween(head, left, right) {
  if (!head || left === right) return head; // Check for null head and equal left/right

  let dummy = new ListNode(0, head);
  let prev = dummy;
  for(let i = 0; i < left - 1; i++) {
    prev = prev.next;
  }
  let cur = prev.next; 
  for(let i = 0; i < right - left; i++) {
    let next = cur.next;
    cur.next = next.next;
    next.next = prev.next;
    prev.next = next;
  }

  return dummy.next;
}