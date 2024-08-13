/** 알파벳 - 난이도 ⭐️⭐️⭐️
 1. 아이디어 :
 - 같은 알파벳 중복 불가, 방문 처리(visited)
 - 상하좌우 이동과 맵 벗어나는 거 방지
 - 좌측 상단 arr[0][0]에 놓는거 부터 depth + 1

 H -> A -> D -> G -> J -> F

 2. 시간 복잡도 :

 3. 자료구조 :
 arr [] - 보드
 visited Set() - 방문 처리
 maxDepth - 가장 깊게 내려간 깊이 = 이동한 칸
 */
const fs = `3 6
HFDFFB
AJHGDH
DGAGEH`;
const input = fs.split('\n');
const [r, c] = input[0].split(' ').map(Number);
let arr = [];
for (let i = 1; i <= r; i++) arr.push(input[i]);
let dx = [-1, 1, 0, 0]; // 행 이동 = 상, 하
let dy = [0, 0, -1, 1]; // 열 이동 = 좌, 우
let visited = new Array(r * c).fill(false); // 방문 처리 좌표
let maxDepth = 0; // 이동한 깊이

function dfs(depth, x, y) {
  maxDepth = Math.max(maxDepth, depth);
  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i]; // 상하 이동
    let ny = y + dy[i]; // 좌우 이동
    if (nx < 0 || nx >= r || ny < 0 || ny >= c) continue; // 맵 벗어나면 현 좌표 통과
    if (visited[arr[nx][ny].charCodeAt() - 65]) continue; // 이미 방문했던 좌표면 통과
    visited[arr[nx][ny].charCodeAt() - 65] = true; // 현 좌표 방문 처리
    dfs(depth + 1, nx, ny); // 재귀로 다음 좌표 이동
    visited[arr[nx][ny].charCodeAt() - 65] = false; // 방문 취소
  }
}
visited[arr[0][0].charCodeAt() - 65] = true;
dfs(1, 0, 0);
console.log(maxDepth);
