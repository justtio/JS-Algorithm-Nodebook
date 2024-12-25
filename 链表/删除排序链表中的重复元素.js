// 递归
function deleteDuplicates(head) {
  if(!head || !head.next) return head;
  if(head.val === head.next.val) {
    head.next = head.next.next;
    return deleteDuplicates(head);
  }
  
  head.next = deleteDuplicates(head.next);
  return head;
}

// 迭代
function deleteDuplicates1(head) {
  while(head && head.next) {
    if(head.val === head.next.val) {
      head.next = head.next.next;
    }else {
      head = head.next;
    }
  }
  return head;
}

function deleteDuplicates2(head) {
  const dummy = new ListNode(0, head);
  let cur = dummy;
  while(cur.next && cur.next.next) {
    if(cur.next.val === cur.next.next.val) {
      cur.next = cur.next.next;
    }else {
      cur = cur.next;
    }
  }
  return dummy.next;
}