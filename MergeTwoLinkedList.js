
//  Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (L1, L2) {
    var dummyHead = new ListNode(0)
    var current = dummyHead
    while (L1 !== null && L2 !== null) {
        if (L1.val < L2.val) {
            current.next = L1
            L1 = L1.next
        } else {
            current.next = L2
            L2 = L2.next
        }
        current = current.next
    }

    if (L1 !== null) {
        current.next = L1
    } else if (L2 !== null) {
        current.next = L2
    }
    return dummyHead.next
};