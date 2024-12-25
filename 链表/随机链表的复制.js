function copyRandomList(head) {
  if (!head) return head;
  const map = new Map();
  let cur = head;
  while(cur) {
    map.set(cur, new ListNode(cur.val));
    cur = cur.next;
  }
  cur = head;
  while(cur) {
    const copiedNode = map.get(cur);
    copiedNode.next = map.get(cur.next) || null;
    copiedNode.random = map.get(cur.random) || null;
    cur = cur.next;
  }
  return map.get(head);
}

// use recursion
function copyRandomList1(head, map = new Map()) {
  if (!head) return head;
  if(!map.has(head)) {
    const copiedNode = new ListNode(head.val);
    map.set(head, copiedNode);
    copiedNode.next = copyRandomList1(head.next, map);
    copiedNode.random = copyRandomList1(head.random, map);
  }
  return map.get(head);
}