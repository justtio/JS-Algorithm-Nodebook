function partition(head, x) {
  let dummy1 = new ListNode(0);
  let dummy2 = new ListNode(0);
  let cur1 = dummy1;
  let cur2 = dummy2;
  while(head) {
    if(head.val < x) {
      cur1.next = head;
      cur1 = cur1.next;
    }else {
      cur2.next = head;
      cur2 = cur2.next;
    }
    head = head.next;
  }
  cur1.next = dummy2.next;
  // cur2.next可能会指向一个小于x的值，所以需要把next置为null
  cur2.next = null;
  return dummy1.next;
}