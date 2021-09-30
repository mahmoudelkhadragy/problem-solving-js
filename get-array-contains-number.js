// numInStr(["1a", "a", "2b", "b"]) ➞ ["1a", "2b"]
// ==> [0-9] === \d
function numInStr(arr) {
  return console.log(arr.filter((x) => /[0-9]/.test(x)));
}
numInStr(["1a", "a", "2b", "b 8", "dfdf8fdf"]);
