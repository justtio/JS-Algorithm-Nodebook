/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 将next指针指向前一个节点，
//然后将prev指针指向当前节点，
//curr指针指向下一个节点
function reverseList(head) {
    //prev指针指向前一个节点
    //curr指针指向当前节点
    let prev = null,
        curr = head;
    //遍历链表
    while(curr) {
        //保存下一个节点
        const next = curr.next;
        //将next指针指向前一个节点
        curr.next = prev;
        //prev指针指向当前节点
        prev = curr;
        //curr指针指向下一个节点
        curr = next;
    }
    //返回prev
    return prev;
}

//递归
function reverseList1(head) {
    //递归终止条件
    if(!head || !head.next) return head;
    //递归返回值是反转链表
    const newHead = reverseList1(head.next);
    //反转链表
    head.next.next = head;
    //防止链表循环
    head.next = null;
    //每层递归返回新的头节点
    return newHead;
}