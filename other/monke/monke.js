var ascii = [
  97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 109, 110, 111,
  112, 113, 114, 115, 116, 119, 120, 121, 122, 44, 46, 32,
];

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let num;
let charArr = [];

function monkey() {
  for (i = 0; i < 127; i++) {
    num = randomBetween(0, 127);
    for (k = 0; k < 29; k++) {
      if (ascii[k] != num) {
        continue;
      }
      var char = String.fromCharCode(num);
      charArr.push(char);
    }
  }
  return charArr.join("");
}
