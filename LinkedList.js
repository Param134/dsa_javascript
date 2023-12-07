// In Linked List, each element has [data, next_Elements_address], all connected 

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

const node1 = new Node(10);
const node2 = new Node(20);

node1.next = node2;
console.log(node1);