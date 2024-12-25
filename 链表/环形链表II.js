function detectCycle(head) {
  let fast = head;
  let slow = head;
  while(fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if(fast === slow) break;
  }
  if(!fast || !fast.next) return null;
  slow = head;
  while(slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
}

// 哈希表
// 一直遍历链表，如果有重复的节点，就说明有环
function detectCycle1(head) {
  const set = new Set();
  while(head) {
    if(set.has(head)) return head;
    set.add(head);
    head = head.next;
  }
  return null;
}