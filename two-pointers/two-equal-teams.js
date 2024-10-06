function dividePlayers(skill) {
	skill.sort((a, b) => a - b);

	let n = skill.length;
	let total = 0;

	let targetSkill = skill[0] + skill[n - 1];

	let left = 0;
	let right = n - 1;

	while (left < right) {
		let sum = skill[left] + skill[right];
		if (sum !== targetSkill) {
			return -1;
		}
		total += skill[left] * skill[right];
		left++;
		right--;
	}

	return total;
}

// Example usage:
let skill = [3, 2, 5, 1, 3, 4];
console.log(dividePlayers(skill)); // Output: 22

let skill2 = [4, 4, 2, 4, 4, 5];
console.log(dividePlayers(skill2)); // Output: -1
