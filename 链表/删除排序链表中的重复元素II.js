//删除相同元素只留下不同元素
//要求输出[1, 1, 2, 3, 4] -> [2, 3, 4]
//迭代
function deleteDuplicates(head) {
  let dummy = new ListNode(0, head);
  let cur = dummy;

  while(cur.next && cur.next.next) {
    if(cur.next.val === cur.next.next.val) {
      let val = cur.next.val;
      while(cur.next && cur.next.val === val) {
        cur.next = cur.next.next;
      }
    }else {
      cur = cur.next;
    }
  }
  return dummy.next;
}

//递归
function deleteDuplicates1(head) {
  if(!head || !head.next) return head;
  if(head.val === head.next.val) {
    while(head.next && head.val === head.next.val) {
      head.next = head.next.next;
    }
    return deleteDuplicates1(head.next); // move return outside the loop
  }else {
    head.next = deleteDuplicates1(head.next);
  }
  return head;
}