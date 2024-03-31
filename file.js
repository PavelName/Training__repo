let num = 266219;
let result = ('' + num).split('');
console.log(result);
let count = 1;
for (let i of result) {
  count *= parseInt(i);
}

let countSecond = count * count * count;
let firstTwoNumber = Number(String(count).slice(0, 2));
console.log(firstTwoNumber);
console.log(countSecond);
console.log(count);