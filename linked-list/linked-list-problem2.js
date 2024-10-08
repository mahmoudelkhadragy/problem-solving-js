class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor(value) {
		const newNode = new Node(value);
		this.head = newNode;
		this.tail = this.head;
	}

	printList() {
		let temp = this.head;
		while (temp !== null) {
			console.log(temp.value);
			temp = temp.next;
		}
	}

	getHead() {
		if (this.head === null) {
			console.log("Head: null");
		} else {
			console.log("Head: " + this.head.value);
		}
	}

	getTail() {
		if (this.tail === null) {
			console.log("Tail: null");
		} else {
			console.log("Tail: " + this.tail.value);
		}
	}

	makeEmpty() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(value) {
		const newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
	}

	// findKthFromEnd(k) {
	// 	if (!this.head) return null;
	// 	if (k < 0) return null;

	// 	let temp = this.head;
	// 	let length = 1;
	// 	while (temp.next !== null) {
	// 		temp = temp.next;
	// 		length += 1;
	// 	}
	// 	let target = length - k;
	// 	let targetTemp = this.head;
	// 	for (let i = 0; i < target; i++) {
	// 		targetTemp = targetTemp.next;
	// 	}
	// 	return targetTemp;
	// }

	findKthFromEnd(k) {
		// Initialize slow and fast pointers at head
		let slow = this.head;
		let fast = this.head;

		// Move fast pointer k steps ahead
		for (let i = 0; i < k; ++i) {
			// If fast reaches null, k is out of range
			console.log(i);
			if (fast === null) {
				return null;
			}
			fast = fast.next;
			console.log(fast);
		}
		console.log(fast);

		// Iterate until fast reaches the end
		while (fast !== null) {
			// Move slow and fast pointers one step
			slow = slow.next;
			fast = fast.next;
		}

		// When fast reaches end, slow is at kth from end
		return slow;
	}
}

let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);

// console.log("Original list:");
// myLinkedList.printList();

const k = 2;
const kthNodeFromEnd = myLinkedList.findKthFromEnd(k);

// console.log(`\n${k}th node from the end:`);
// if (kthNodeFromEnd) {
// 	console.log(kthNodeFromEnd.value);
// } else {
// 	console.log("Not found");
// }

/*
  EXPECTED OUTPUT:
  ----------------
  Original list:
  1
  2
  3
  4
  5
  2th node from the end:
  4
*/
