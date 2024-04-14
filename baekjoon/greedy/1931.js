// 회의실 배정
// 난이도 ⭐️⭐️

const fs = `11
1 4
3 5
0 6
5 7
3 8
5 9
6 10
8 11
8 12
2 13
12 14`;
const input = fs.split('\n');
const n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(input[i].split(' ').map(Number));
}
arr.sort((a, b) => {
  if (a[1] != b[1]) return a[1] - b[1];
  else return a[0] - b[0];
}); // 배열 변환

let cnt = 1,
  cur = 0; // cnt: 갯수, cur: 현재 위치
for (let i = 1; i < n; i++) {
  if (arr[cur][1] <= arr[i][0]) {
    cur = i;
    cnt += 1;
  }
}
console.log(cnt);
