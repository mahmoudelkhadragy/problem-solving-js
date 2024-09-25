function groupAnagrams(strs) {
	if (strs.length === 1) return [strs];
	let sortedStrs = strs.map((str) => str.split("").sort().join(""));
	let mapp = {};

	for (let i = 0; i < sortedStrs.length; i++) {
		if (mapp.hasOwnProperty(sortedStrs[i])) {
			const pres = mapp[sortedStrs[i]];
			mapp[sortedStrs[i]] = [...pres, strs[i]];
		} else {
			mapp[sortedStrs[i]] = [strs[i]];
		}
	}
	return Object.values(mapp);
}
groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
