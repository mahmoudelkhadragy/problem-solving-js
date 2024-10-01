function evalRPN(tokens) {
	const stack = [];
	tokens.forEach((t) => {
		if (t === "+") {
			stack.push(+stack.pop() + +stack.pop());
		} else if (t === "-") {
			const a = +stack.pop();
			const b = +stack.pop();
			stack.push(b - a);
		} else if (t === "/") {
			const a = +stack.pop();
			const b = +stack.pop();
			stack.push(Math.trunc(b / a));
		} else if (t === "*") {
			stack.push(+stack.pop() * +stack.pop());
		} else {
			stack.push(+t);
		}
	});
	return stack[0];
}
