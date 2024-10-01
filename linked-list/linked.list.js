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
		this.length = 1;
	}

	push(value) {
		const newNode = new Node(value);
		if (!this.head) {
			this.head = this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}

	pop() {
		if (!this.head) return undefined;
		let pre = this.head;
		let temp = this.head;
		while (temp.next) {
			pre = temp;
			temp = temp.next;
		}
		this.tail = pre;
		this.tail.next = null;
		this.length--;
		if (this.length === 0) {
			this.head = this.tail = null;
		}
		return temp;
	}
	unshift(value) {
		const newNode = new Node(value);
		if (!this.head) {
			this.head = this.tail = newNode;
		}
		newNode.next = this.head;
		this.head = newNode;

		this.length++;
		return this;
	}
	shift() {
		if (!this.head) return undefined;
		let temp = this.head;
		this.head = this.head.next;
		temp.next = null;
		this.length--;
		if (this.length === 0) {
			this.head = this.tail = null;
		}
		return temp;
	}
}

let myLinkedList = new LinkedList(7);
myLinkedList.push(4);
myLinkedList.push(22);
