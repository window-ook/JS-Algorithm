/* N-Queen 구하기
1. 아이디어 :
- 행, 열, 대각선에 위치하는지 판단하여 놓을 수 있는지 확인하는 함수 possible(x, y),
- 행(기피)을 하나씩 내려가면서 확인하는 재귀함수 dfs(row)
시간복잡도 : N! (중복 불가능)
자료구조 : queens[] 퀸의 위치를 표시하는 배열 */

const fs = `8`;
const n = Number(fs);
let queens = [];

function possible(x, y) {
  for (let [a, b] of queens) {
    if (x == a || y == b) return false; // 행, 열 같은지
    if (Math.abs(x - a) == Math.abs(y - b)) return false; // 대각선에 있는지
  }
  return true; // 다 아니면 가능하다고 판단
}

let cnt = 0;
function dfs(row) {
  if (row == n) cnt += 1;
  for (let i = 0; i < n; i++) {
    // 첫 행부터 시작
    if (!possible(row, i)) continue; // 불가능하면 통과
    queens.push([row, i]); // 가능하면 놓기
    dfs(row + 1); // 다음 행에서도 확인
    queens.pop(); //
  }
}
dfs(0);
console.log(cnt);
