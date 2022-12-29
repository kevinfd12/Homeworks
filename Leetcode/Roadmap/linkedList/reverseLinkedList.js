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

var reverseList = function (head) {
  let cur = head;
  let prev = null;
  while (cur) {
    // get next node
    const next = cur.next;
    // update reference
    cur.next = prev;
    // update state
    prev = cur;
    cur = next;
  }
  return prev;
};

// var reverseList = function(head) {
//     let cur = head
//     console.log("This is starting value for cur")
//     console.log(cur)
//     console.log("------------------------------------")
//     let prev = null
//     while(cur){
//         // get next node
//     const next = cur.next;
//     console.log("This is the value for next ")
//     console.log(next)
//     // update reference
//     cur.next = prev;
//     console.log("This is the value for cur.next ")
//     console.log(cur.next)
//     // update state
//     prev = cur;
//     console.log("This is the value for prev ")
//     console.log(prev)
//     cur = next;
//     console.log("This is the value for cur ")
//     console.log(cur)
//     console.log("----------------------------------------------------")
//     }
//     return prev

// };
