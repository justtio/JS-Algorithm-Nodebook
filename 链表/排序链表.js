function sortList(head) {
  if(!head || !head.next) return head;
  const mid = findMid(head);
  const right = sortList(mid.next);
  mid.next = null;
  const left = sortList(head);
  return merge(left, right);
}

function findMid(head) {
  let slow = head;
  let fast = head.next;
  while(fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

function merge(left, right) {
  const dummy = new ListNode(0);
  let cur = dummy;
  while(left && right) {
    if(left.val < right.val) {
      cur.next = left;
      left = left.next;
    }else {
      cur.next = right;
      right = right.next;
    }
    cur = cur.next;
  }
  cur.next = left || right;
  return dummy.next;
}