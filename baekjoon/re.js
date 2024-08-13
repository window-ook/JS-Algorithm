/**
 1. 아이디어 : 퀸을 서로 공격할 수 없는 위치에 놓기
 - N이 주어지면 N x N의 체스판이 생성된다
 - 대각선이나 같은 행 또는 열에 있는지 판단하는 함수 possible(x, y)
 - 행을 내려가면서 possible로 확인하는 재귀 dfs(row)

 3. 자료구조:
 queens [] - 퀸 좌표
 count - 좌표에 나타낼 퀸
 */
const fs = `8`;
const n = Number(fs);
let queens = [];
let count = 0;

function possible(x, y) {
  for (let [a, b] of queens) {
    if (a == x || b == y) return false;
    if (Math.abs(x - a) == Math.abs(y - b)) return false;
  }
  return true;
}

function dfs(row) {
  if (row == n) count += 1;
  for (let i = 0; i < n; i++) {
    if (!possible(row, i)) continue;
    queens.push([row, i]);
    dfs(row + 1);
    queens.pop();
  }
}
dfs(0);
console.log(count);
