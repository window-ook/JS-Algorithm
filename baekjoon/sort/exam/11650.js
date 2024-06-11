/** 좌표 정렬하기 - 난이도 ⭐️ */

const fs = `5
3 4
1 1
1 -1
2 2
3 3`;

let input = fs.split('\n');
let n = Number(input[0]);
let arr = [];

for (let i = 1; i <= n; i++) {
  let [x, y] = input[i].split(' ').map(Number);
  arr.push([x, y]);
}

function compare(a, b) {
  if (a[0] != b[0]) return a[0] - b[0]; // x 좌표 기준 오름차순
  else return a[1] - b[1]; // x가 같으면 y 좌표 기준 오름차순
}

arr.sort(compare); // 정렬 수행
let answer = ''; // 정렬 결과 출력
for (let point of arr) {
  answer += point[0] + ' ' + point[1] + '\n';
}

console.log(answer);
