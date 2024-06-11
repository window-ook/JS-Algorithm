/** 박스채우기 - 난이도 ⭐️⭐️⭐️ 
 
  1. 아이디어 : 가장 가까운 큐브 크기를 구하기 -> x보다 작으면서 가장 가까운 2^i 찾기
*/
const fs = `37 42 59
6
0 143821
1 14382
2 1438
3 143
4 14
5 1`;
const input = fs.split('\n');
function nearestSquare(x) {
  let i = 1;
  while (2 ** i <= x) i += 1;
  return i - 1;
}

let length = Number(input[0].split(' ')[0]);
let width = Number(input[0].split(' ')[1]);
let height = Number(input[0].split(' ')[2]);
let n = Number(input[1]);
let cubes = Array(20).fill(0); // 큐브의 종류
for (let i = 2; i <= n + 1; i++) {
  let a = Number(input[i].split(' ')[0]);
  let b = Number(input[i].split(' ')[1]);
  cubes[a] = b; // 종류별로 해당 종류의 사용가능한 개수를 넣는다
}
let size = 19; // 가장 작은 사이즈를 구함
size = nearestSquare(length);
size = Math.min(size, nearestSquare(width));
size = Math.min(size, nearestSquare(height));

let res = 0; // 필요한 큐브의 최소 갯수
let used = 0;

for (let i = size; i >= 0; i--) {
  used *= 8; // 채널, 너비, 높이가 2씩 줄었으므로 큐브의 개수는 8배 증가한다
  cur = 2 ** i; // 현재의 정육면체 큐브의 길이
  let required = // 채워넣어야 할 큐브의 개수
    parseInt(length / cur) * parseInt(width / cur) * parseInt(height / cur) -
    used;
  let usage = Math.min(required, cubes[i]); // 2^i일 때 넣을 수 있는 큐브의 개수
  res += usage; // 필요한 큐브의 개수에 더해준다
  used += usage;
}
if (used == length * width * height) console.log(res);
else console.log(-1);
