// validAnagram('', '')  => true
// validAnagram('aaz', 'zza')  => false
// validAnagram('anagram', 'nagaram')  => true
// validAnagram('awesome', 'awesom')  => false
// validAnagram('qwerty', 'qeywrt')  => true

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let obj = {};
  for (let char of str1) {
    obj[char] = (obj[char] || 0) + 1;
  }
  for (let char of str2) {
    if (!obj[char]) {
      return false;
    } else {
      obj[char] -= 1;
    }
  }
  return true;
}

validAnagram("anagram", "nagaram");
