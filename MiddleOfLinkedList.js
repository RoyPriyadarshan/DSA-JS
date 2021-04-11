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
var middleNode = function (head) {
    let node = head, count = 0, middle = 0
    while (node) {
        node = node.next
        count++
    }
    if (count % 2 != 0) {
        count = Math.floor((count + 1) / 2)
    } else {
        count = Math.floor((count) / 2) + 1
    }

    let outputNode = head
    while (count > 1) {
        outputNode = outputNode.next
        count--
    }
    return outputNode
};