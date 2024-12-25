function swapPairs(head) {
  if(!head || !head.next) return head;
  const newHead = head.next;
  head.next = swapPairs(newHead.next);
  newHead.next = head;
  return newHead;
}

function swapPairs(head) {
  const dummy = new ListNode(0, head);
  let cur = dummy;
  while(cur.next && cur.next.next) {
    let first = cur.next;
    let second = cur.next.next;
    first.next = second.next;
    cur.next = second;
    cur.next.next = first;
    cur = cur.next.next;
  }
  return dummy.next;
}

function swapPairs(head) {
  const dummy = new ListNode(0, head);
  let cur = dummy;
  while(cur.next && cur.next.next) {
    let tmp = cur.next;
    let tmp1 = cur.next.next.next;
    cur.next = cur.next.next;
    cur.next.next = tmp;
    tmp.next = tmp1;
    cur = cur.next.next;
  }
  return dummy.next;
}