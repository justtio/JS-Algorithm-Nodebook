// 递归
function mergeTwoLists(l1, l2) {
  if(!l1) return l2;
  if(!l2) return l1;

  if(l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  }else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
}

//迭代
function mergeTwoLists1(l1, l2) {
  // 创建一个虚拟的头结点
  let prehead = new ListNode(-1);
  let prev = prehead;
  // 两个指针分别遍历两个链表
  while(l1 && l2) {
    if(l1.val < l2.val) {
      prev.next = l1;
      l1 = l1.next;
    }else {
      prev.next = l2;
      l2 = l2.next;
    }
    // 移动
    prev = prev.next;
  }
  // 将剩余的链表接在合并链表的后面
  prev.next = l1 ? l1 : l2;
  // 返回合并链表的头结点
  return prehead.next;
}