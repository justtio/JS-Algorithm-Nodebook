/**
 * 给你两个非空的链表，表示两个非负的整数。
 * 它们每个数字都是按照逆序的方式存储的，并且每个节点只能存储一位数字。
 * 将两数相加返回一个新的链表。
 * 你可以假设除了数字 0 之外，这两个数字都不会以零开头。
 * 示例 1:
 * 输入:l1 = [2,4,3], l2 = [5,6,4]
 * 输出:[7,0,8]
 * 解释:342 + 465 = 807.
 * 示例 2:
 * 输入:l1 = [0], l2 = [0]
 * 输出:[0]
 * 示例 3:
 * 输入:l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
 * 输出:[8,9,9,9,0,0,0,1]
 * 提示:
 * 每个链表中的节点数在范围 [1, 100] 内
 * 0 <= Node.val <= 9
 * 题目数据保证列表表示的数字不含前导零
 */

function addTowNumbers(l1, l2) {
  let dummyHead = new ListNode(0);
  let current = dummyHead;
  let carry = 0;

  while(l1 !== null || l2 !== null || carry > 0) {
    let val1 = (l1 !== null) ? l1.val : 0; // 获取l1当前节点的值
    let val2 = (l2 !== null) ? l2.val : 0; // 获取l2当前节点的值

    let sum = val1 + val2 + carry; //计算当前为的和
    carry = Math.floor(sum / 10); //更新进位
    current.next = new ListNode(sum % 10); //创建新节点并连接到结果链表

    current = current.next; //移动到下一个节点
    if(l1 !== null) l1 = l1.next; //移动l1指针
    if(l2 !== null) l2 = l2.next; //移动l2指针
  }
  return dummyHead.next;
}