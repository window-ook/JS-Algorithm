// 구현
const file = require('fs').readFileSync('/dev/stdin', 'utf8');
const input = file.trim().toString().split('\n');
let everyday = 0;

for (let i = 0; i < input.length; i++) {
  let [start, end] = input[i].trim().split(/\s+/);
  let [startHours, startMins] = start.split(':').map(Number);
  let [endHours, endMins] = end.split(':').map(Number);
  let startTotal = startHours * 60 + startMins;
  let endTotal = endHours * 60 + endMins;
  if (endTotal < startTotal) endTotal += 1440;
  everyday += endTotal - startTotal;
}
console.log(everyday);
