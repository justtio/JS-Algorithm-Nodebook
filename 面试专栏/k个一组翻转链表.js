/**
 * 给你一个链表,每 k 个节点一组进行翻转，请你返回翻转后的链表，
 * k 为一个正整数，它的值小于或等于链表的长度。
 * 如果节点总数不是 k 的整数倍，则将最后剩余节点保持原有顺序。
 */
// 反转链表的一部分
function reverseLinkedList(start, end) {
  let prev = null;
  let cur = start; 
  while(cur !== end) {
    let next = cur.next; //先保存当前节点的下一个节点
    cur.next = prev; //翻转当前节点
    prev = cur; //更新prev
    cur = next; //更新cur
  }
  return prev;
}

//找到链表的第k个节点
function getKthNode(head, k) {
  let cur = head;
  let count = 0;
  while(cur && count < k) {
    cur = cur.next;
    count++;
  }
  return cur; //返回第k个节点
}

// 对链表每k个节点进行翻转
function reverseKGroup(head, k) {
  if(!head || k === 1) return head; //空链表或者k=1直接返回

  //创建一个虚拟头节点，以简化操作
  let dummy = new ListNode(0);
  dummy.next = head;
  let groupPrev = dummy;

  while(true) {
    // 1. 找到第k个节点
    let kthNode = getKthNode(groupPrev, k);
    if(!kthNode) break; //翻转不足k个，退出

    //2. 翻转从groupPrev.next到kthNode之间的节点；
    let groupNext = kthNode.next;
    let groupHead = groupPrev.next;
    kthNode.next = null; //临时断开链表

    groupPrev.next = reverseLinkedList(groupHead, groupNext);
    groupHead.next = groupNext;

    //3. 更新groupPrev为当前翻转后的尾结点
    groupPrev = groupHead;
  }
  return dummy.next;
}
