function removeElements(head, val) {
  while(head && head.val === val) {
    head = head.next;
  }
  let cur = head;
  while(cur && cur.next) {
    if(cur.next.val === val) {
      cur.next = cur.next.next;
    }else {
      cur = cur.next;
    }
  }
  return head;
}

function removeElements1(head, val) {
  const dummy = new ListNode(0, head);
  let cur = dummy;
  while(cur.next) {
    if(cur.next.val === val) {
      cur.next = cur.next.next;
    }else {
      cur = cur.next;
    }
  }
  return dummy.next;
}