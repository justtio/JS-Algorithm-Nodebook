function removeNthFromEnd(head, n) {
  let fast = head;
  let slow = head;
  while(n) {
    fast = fast.next;
    n--;
  }
  if(!fast) return head.next;
  while(fast.next){
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return head;
}

function removeNthFromEnd1(head, n) {
  let dummy = new ListNode(0, head);
  let fast = dummy;
  let slow = dummy;
  while(n) {
    fast = fast.next;
    n--;
  }
  while(fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return dummy.next;
}