const fs = `4 11
802
743
457
539`;
const input = fs.split('\n');
const k = Number(input[0].split(' ')[0]);
const n = Number(input[0].split(' ')[1]);
const arr = [];
for (let i = 1; i <= k; i++) {
  arr.push(Number(input[i]));
}

let start = 1;
let end = arr.reduce((a, b) => Math.max(a, b));
let result = 0;

while (start <= end) {
  let total = 0;
  let mid = parseInt((start + end) / 2);
  for (x of arr) total += parseInt(x / mid);
  if (total < n) end = mid - 1;
  else {
    result = mid;
    start = mid + 1;
  }
}
console.log(result);
