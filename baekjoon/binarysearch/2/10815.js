// 숫자 카드
const file = require('fs').readFileSync('/dev/stdin');
const input = file.toString().trim().split('\n');
const n = Number(input[0]);
const m = Number(input[2]);

const cards = input[1].split(' ').map(Number);
cards.sort((a, b) => a - b);
const nums = input[3].split(' ').map(Number);

const answer = [];

// nums에서 하나씩 꺼내 cards에 있는지 확인해야 함
for (let i = 0; i < m; i++) {
  let num = nums[i];
  answer.push(binarySearch(cards, num, 0, n));
}

function binarySearch(arr, target, start, end) {
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] == target) return 1;
    else if (arr[mid] > target) end = mid - 1;
    else start = mid + 1;
  }
  return 0;
}

console.log(answer.join(' '));
