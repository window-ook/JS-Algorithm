/** 단지 번호 붙이기 - 난이도 ⭐️⭐️
    
    1. 아이디어 :
    - 상하좌우로 이동하면서 연결 범위 확인
    - 단지 개수 올리기
    - 단지당 위치의 개수를 한 라인씩 출력하기

    2. 시간 복잡도 :

    3. 자료구조 :
*/
const fs = `7
0110100
0110101
1110101
0000111
0100000
0111110
0111000`;
const input = fs.split('\n');
const n = Number(input[0]);
let graph = []; // 그래프 그리기
for (let i = 1; i <= n; i++) graph.push(input[i].split('').map(Number));
let answer = []; // 단지의 수
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    let current = dfs(i, j); // 현재 위치
    if (current > 0) answer.push(current); // 단지가 존재하는 경우
  }
}
answer.sort((a, b) => a - b); // 오름차순 정렬
console.log(answer.length + '\n' + answer.join('\n')); // 단지 수 + 단지내 집 수 출력

function dfs(x, y) {
  if (x >= n || x <= -1 || y >= n || x <= -1) return 0; // 맵 이탈 처리
  // 방문한 적 없는 곳이면
  if (graph[x][y] >= 1) {
    graph[x][y] = -1; // 방문 처리
    let result = 1; // 단지내 집 수
    result += dfs(x - 1, y);
    result += dfs(x + 1, y);
    result += dfs(x, y - 1);
    result += dfs(x, y + 1);
    return result;
  }
  // 방문한 적 있으면
  return 0;
}
