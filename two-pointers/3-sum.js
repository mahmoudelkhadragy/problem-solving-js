function threeSum(nums) {
	let result = [];
	// sort array
	nums.sort((a, b) => a - b);

	for (let i = 0; i < nums.length - 2; i++) {
		// if current number is same as previous, skip
		if (i > 0 && nums[i] === nums[i - 1]) {
			continue;
		}
		// two pointers
		let left = i + 1;
		let right = nums.length - 1;
		while (left < right) {
			// if sum is less than 0, move left pointer to right
			if (nums[i] + nums[left] + nums[right] < 0) {
				left++;
			}
			// if sum is greater than 0, move right pointer to left
			else if (nums[i] + nums[left] + nums[right] > 0) {
				right--;
			}
			// if sum is 0, push to result and move pointers
			else {
				result.push([nums[i], nums[left], nums[right]]);
				left++;
				right--;
				// if left pointer is same as previous, skip
				while (left < right && nums[left] === nums[left - 1]) {
					left++;
				}
				// if right pointer is same as previous, skip
				while (left < right && nums[right] === nums[right + 1]) {
					right--;
				}
			}
		}
	}
	return result;
}

let s = threeSum([-1, 0, 1, 2, -1, -4]); // [[-1, -1, 2], [-1, 0, 1]]
console.log(s);
