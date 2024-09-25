class Solution {
	/**
	 * @param {string[]} strs
	 * @returns {string}
	 */
	encode(strs) {
		let s = "";
		strs.forEach((st) => (s += `${st.length}#${st}`));
		return s;
	}

	/**
	 * @param {string} str
	 * @returns {string[]}
	 */
	decode(str) {
		let result = [];
		let i = 0;

		while (i < str.length) {
			let j = i;
			while (str[j] !== "#") {
				j++;
			}
			let l = +str.substring(i, j);

			result.push(str.substring(j + 1, j + 1 + l));

			i = j + 1 + l;
		}
	}
}
const so = new Solution();
so.encode(["cscs", "2ldl", "ggdada"]);
so.decode("4#cscs4#2ldl6#ggdada");
