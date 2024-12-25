// 快慢指针
function reorderList(head) {
  let fast = head;
  let slow = head;
  // 找到链表的中间节点
  while(fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  let prev = null;
  let cur = slow;
  // 反转后半部分链表
  while(cur) {
    let next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  // 合并
  let first = head;
  let second = prev;
  while(second.next) {
    let firstNext = first.next;
    let secondNext = second.next;
    first.next = second;
    second.next = firstNext;
    first = firstNext;
    second = secondNext;
  }
}