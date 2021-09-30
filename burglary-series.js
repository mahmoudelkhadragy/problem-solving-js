// {
//     kitchen: {
//       ["gold spoons"]: "900",
//       piano: "550",
//       notes: "ga0r76ba22g4e",
//     },
//     cellar: {
//       reminder: "dog",
//       bottle: "750",
//     },
// }

const findAndRemove = (obj) => {
  for (prop in obj) {
    for (prop1 in obj[prop]) {
      if (Number.isNaN(+obj[prop][prop1]) === true) {
        delete obj[prop][prop1];
      } else {
        obj[prop][prop1] = Number(obj[prop][prop1]);
      }
    }
  }
  return console.log(obj);
};
findAndRemove({
  kitchen: {
    ["gold spoons"]: "900",
    piano: "550",
    notes: "ga0r76ba22g4e",
  },
  cellar: {
    reminder: "dog",
    bottle: "750",
  },
});
