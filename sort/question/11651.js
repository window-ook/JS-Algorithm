// 백준 11651 : 좌표 정렬하기 2, sort
const data = `5
0 4
1 2
1 -1
2 2
3 3`;

let input = data.split('\n');
let n = Number(input[0]);
let arr = [];

for (let i = 1; i <= n; i++) {
  let [x, y] = input[i].split(' ').map(Number);
  arr.push([x, y]);
}

function compare(a, b) {
  if (a[1] != b[1]) return a[1] - b[1];
  else return a[0] - b[0];
}

arr.sort(compare);

let answer = '';
for (point of arr) {
  answer += point[0] + ' ' + point[1] + '\n';
}

console.log(answer);
