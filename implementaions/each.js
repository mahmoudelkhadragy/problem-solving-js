var _ = {};

_.each = function (list, callBack) {
  if (Array.isArray(list)) {
    for (let i = 0; i < list.length; i++) {
      callBack(list[i], i, list);
    }
  } else {
    for (const key in list) {
      callBack(list[key], key, list);
    }
  }
};

_.each(["fares", "nader", "rody"], function (name, i, arr) {
  if (arr[i + 1]) {
    console.log(`${name} is younger than ${arr[i + 1]}`);
  } else {
    console.log(`${name} is the oldest`);
  }
});
