class Node {
    constructor(item) {
        this.data = item
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    add = (item) => {
        var node = new Node(item)
        if (this.head === null) {
            this.head = node
        } else {
            var current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
        this.size++
    }

    insertElementAt = (item, index) => {
        if (index > 0 && index > this.size) {
            return -1
        } else {
            var node = new Node(item)
            if (index === 0) {
                this.head = node
            } else {
                var current, previous, itr = 0
                current = this.head
                while (itr < index) {
                    previous = current
                    current = current.next
                    itr++
                }
                previous.next = node
                node.next = current
            }
            this.size++
        }
    }

    removeForm = (index) => {
        if (index > 0 && index > this.size) {
            return -1
        } else {
            var current = this.head, previous, itr = 0
            if (index === 0) {
                this.head = current.next
            } else {
                while (itr < index) {
                    previous = current
                    current = current.next
                    itr++
                }
                previous.next = current.next
            }
            this.size--
            return current.data
        }
    }

    removeElement = (element) => {
        var current = this.head;
        var prev = null;
        while (current != null) {
            if (current.data === element) {
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.data;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }

    indexOf = (element) => {
        var count = 0;
        var current = this.head;

        while (current != null) {
            if (current.data === element)
                return count;
            count++;
            current = current.next;
        }
        return -1;
    }

    isEmpty = () => {
        return this.size == 0;
    }

    size_of_list = () => {
        console.log(this.size);
    }

    printList = () => {
        var current = this.head;
        var str = "";
        while (current) {
            str += current.data + " ";
            current = current.next;
        }
        console.log(str);
    }
}

var ll = new LinkedList();

// testing isEmpty on an empty list
// returns true
console.log(ll.isEmpty());

// adding element to the list
ll.add(10);

// prints 10
ll.printList();

// returns 1
console.log(ll.size_of_list());

// adding more elements to the list
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);

// returns 10 20 30 40 50
ll.printList();

// prints 50 from the list
console.log("is element removed ? " + ll.removeElement(50));

// prints 10 20 30 40
ll.printList();

// returns 3
console.log("Index of 40 " + ll.indexOf(40));

// insert 60 at second position
// ll contains 10 20 60 30 40
ll.insertElementAt(60, 2);

ll.printList();

// returns false
console.log("is List Empty ? " + ll.isEmpty());

// remove 3rd element from the list
console.log(ll.removeForm(3));

// prints 10 20 60 40
ll.printList();