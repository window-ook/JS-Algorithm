/** N-Queen - 난이도 ⭐️⭐️⭐️

  1. 아이디어
  - 퀸을 서로 공격할 수 없게 놓는 문제
  - 맨 처음 행부터 차례대로 퀸을 놓는다고 생각하면 가짓수를 훨씬 줄일 수 있다
  - 행, 열, 대각선에 위치하는지 판단하는 함수 possible(x, y)
  - 행(기피)을 하나씩 내려가면서 확인하는 재귀함수 dfs(row)

  2. 자료구조
  - queens [] : 퀸 좌표
  - count : 배치 경우의 수 */
const fs = `8`;
let n = Number(fs);
let queens = [];
let count = 0;

function possible(x, y) {
  for (let [a, b] of queens) {
    if (x == a || y == b) return false; // 행, 열 비교
    if (Math.abs(x - a) == Math.abs(y - b)) return false; // 대각선 비교
  }
  return true;
}

function dfs(row) {
  if (row == n) count += 1; // 모든 행을 확인하고 난 뒤 경우의 수 1 추가
  // row : 행, i : 열 인덱스
  for (let i = 0; i < n; i++) {
    if (!possible(row, i)) continue; // 놓을 수 없으면 현 좌표 통과
    queens.push([row, i]); // 가능하면 현 좌표 queens에 추가
    dfs(row + 1);
    queens.pop();
  }
}
dfs(0);
console.log(count);
