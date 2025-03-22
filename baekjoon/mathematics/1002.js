// 터렛
// 원의 교점 공식
// 중심이 같을 때(2가지) 와 중심이 다를 때(3가지)
const file = require('fs').readFileSync('/dev/stdin');
const input = file.toString().trim().split('\n');
const testCase = Number(input[0]);

for (let i = 1; i <= testCase; i++) {
  const row = input[i].split(' ').map(Number);
  const turret1 = row.slice(0, 3);
  const turret2 = row.slice(3, 6);
  const result = intersection(...turret1, ...turret2);
  console.log(result);
}

function intersection(x1, y1, r1, x2, y2, r2) {
  const d = (x1 - x2) ** 2 + (y1 - y2) ** 2;
  const doubleSum = (r1 + r2) ** 2;
  const doubleDiff = (r1 - r2) ** 2;

  if (d == 0) {
    if (r1 == r2) return -1;
    return 0;
  } else {
    if (d < doubleDiff || d > doubleSum) return 0;
    else if (d == doubleDiff || d == doubleSum) return 1;
    else if (d < doubleSum) return 2;
  }
}
