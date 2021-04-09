
reverseLinkedList = (head) => {
    let prev = null, next
    while (head.next !== null) {
        next = head.next
        head.next=prev
        prev=head
        head=next
    }
    return prev
}