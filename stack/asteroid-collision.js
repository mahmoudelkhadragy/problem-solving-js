function asteroidCollision(asteroids) {
	let stack = [];

	for (let asteroid of asteroids) {
		let destroyed = false;

		// Handle potential collisions when the current asteroid is moving left
		while (stack.length && asteroid < 0 && stack[stack.length - 1] > 0) {
			let top = stack[stack.length - 1];

			// If the top of the stack is smaller in size, it explodes
			if (Math.abs(asteroid) > top) {
				stack.pop(); // Remove the smaller asteroid
				continue; // Continue checking the next asteroid
			} else if (Math.abs(asteroid) === top) {
				// Both asteroids are of the same size, both explode
				stack.pop();
			}
			destroyed = true; // Current asteroid is destroyed
			break;
		}

		// If the asteroid wasn't destroyed, add it to the stack
		if (!destroyed) {
			stack.push(asteroid);
		}
	}

	return stack;
}

let r = asteroidCollision([5, 10, -5]); // [5, 10]
console.log(r);

// other solution
function asteroidCollision(asteroids) {
	return asteroids.reduce((stack, asteroid) => {
		while (stack.length && asteroid < 0 && stack[stack.length - 1] > 0) {
			let top = stack[stack.length - 1];

			// If current asteroid is larger, pop the stack and keep checking
			if (Math.abs(asteroid) > top) {
				stack.pop();
				continue;
			}

			// If they are the same size, both asteroids explode
			if (Math.abs(asteroid) === top) {
				stack.pop();
			}

			// Current asteroid is destroyed
			return stack;
		}

		// If no collision or current asteroid survives, add it to the stack
		stack.push(asteroid);
		return stack;
	}, []);
}

// Test cases
console.log(asteroidCollision([5, 10, -5])); // Output: [5, 10]
console.log(asteroidCollision([8, -8])); // Output: []
console.log(asteroidCollision([10, 2, -5])); // Output: [10]
