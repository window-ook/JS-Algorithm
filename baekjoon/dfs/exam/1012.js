/** 유기농 배추 - 난이도 ⭐️⭐️⭐️
    1. 아이디어 : 
    - 전체 그래프 그리기
    - 배추를 그래프에 심기
    - dfs로 라인을 하나씩 내려가면서 탐색하고 방문표시
 
    2. 시간복잡도 :

    3. 자료구조 :
    testCase 테스트 케이스 개수
    graph [] 그래프 정보
    answer 필요한 지렁이 마리 수
 */
const fs = `2
10 8 17
0 0
1 0
1 1
4 2
4 3
4 5
2 4
3 4
7 4
8 4
9 4
7 5
8 5
9 5
7 6
8 6
9 6
10 10 1
5 5`;
const input = fs.split('\n');
let testCases = Number(input[0]); // 테스트 케이스의 수
let line = 1;
while (testCases--) {
  // 가로 길이(M), 세로 길이(N), 배추가 심어져 있는 위치의 개수(K)
  let [m, n, k] = input[line].split(' ').map(Number);
  let graph = [];
  for (let i = 0; i < n; i++) {
    graph[i] = new Array(m); // m x n 그래프 그리기
  }
  for (let i = 1; i <= k; i++) {
    let [y, x] = input[line + i].split(' ').map(Number);
    graph[x][y] = 1; // 배추가 심긴 좌표에 표시
  }
  let answer = 0; // 연결 요소(connected component)의 수 계산
  // 세로로 한 라인씩 내려가면서 모든 좌표 탐색
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (dfs(graph, n, m, i, j)) answer++; // 현재 위치에서 DFS 수행
    }
  }
  line += k + 1; // 다음 테스트 케이스로 이동(0번째와 1번째가 문제이므로)
  console.log(answer);
}

function dfs(graph, n, m, x, y) {
  // 깊이 우선 탐색(DFS) 수행
  // 주어진 범위를 벗어나는 경우에는 즉시 종료
  if (x <= -1 || x >= n || y <= -1 || y >= m) return false;
  // 현재 노드를 아직 처리하지 않았다면
  if (graph[x][y] == 1) {
    // 해당 노드 방문 처리
    graph[x][y] = -1;
    // 상, 하, 좌, 우의 위치들도 모두 재귀적으로 호출
    dfs(graph, n, m, x - 1, y);
    dfs(graph, n, m, x, y - 1);
    dfs(graph, n, m, x + 1, y);
    dfs(graph, n, m, x, y + 1);
    return true;
  }
  // 방문한 곳은 false 반환
  return false;
}
