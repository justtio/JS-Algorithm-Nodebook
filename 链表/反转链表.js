function reverseList(head) {
  if(!head || !head.next) return head;
  const newHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
}

function reverseList1(head) {
  let prev = null;
  let cur = head;
  while(cur) {
    let next = cur.next;
    cur.next = prev;
    prev = cur;  
    cur = next;
  }
  return prev;
}
