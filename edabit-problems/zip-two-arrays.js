// Given an array of women and an array of men, either:

// Return "sizes don't match" if the two arrays have different sizes.
// If the sizes match, return an array of pairs, with the first woman paired with the first man, second woman paired with the second man, etc.

//zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh", "Tim"])
// ➞ [["Ana", "Bob"], ["Amy", "Josh"],["Lisa", "Tim"]]

const zipIt = (women, men) => {
  if (women.length === men.length) {
    return console.log(women.map((woman, i) => [woman, men[i]]));
  }
  return console.log(`sizes don't match`);
};

zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh", "Tim"]);
