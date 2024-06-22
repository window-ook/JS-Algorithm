/** N-Queen 구하기 - 난이도 ⭐️⭐️⭐️
  1. 아이디어 :
  - 서로 공격할 수 없게 놓는 문제임
  - 행, 열, 대각선에 위치하는지 판단하는 함수 possible(x, y)
  - 행(기피)을 하나씩 내려가면서 확인하는 재귀함수 dfs(row)

  2. 시간복잡도 : N! (중복 불가능)

  3. 자료구조 : queens[] 퀸의 위치를 표시하는 배열 
*/

const fs = `8`;
const n = Number(fs);
let queens = [];

function possible(x, y) {
  for (let [a, b] of queens) {
    if (x == a || y == b) return false; // 행, 열 같은지 비교
    if (Math.abs(x - a) == Math.abs(y - b)) return false; // 대각선에 있는지 비교
  }
  return true; // 행, 열, 대각선에 다 없으면 놓을 수 있음
}

let cnt = 0;
function dfs(row) {
  if (row == n) cnt += 1; // 모든 행을 돌았으면 퀸(queen)을 N개 배치할 수 있는 경우의 수 +1
  for (let i = 0; i < n; i++) {
    if (!possible(row, i)) continue; // 불가능하면 통과
    queens.push([row, i]); // 가능하면 놓기
    dfs(row + 1); // 재귀 호출
    queens.pop(); //
  }
}
dfs(0);
console.log(cnt);
