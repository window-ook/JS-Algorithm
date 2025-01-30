// 이분 그래프
// ⭐️⭐️
// bfs, isBipartite 함수 활용하기

const fs = `2
3 2
1 3
2 3
4 4
1 2
2 3
3 4
4 2`;
const input = fs.split('\n');
let testCases = Number(input[0]);
let line = 1;

// BFS 함수
function bfs(x, graph, visited) {
  const queue = new Queue();
  queue.enqueue(x);
  visited[x] = 0;

  while (queue.getLength() != 0) {
    x = queue.dequeue();
    for (let y of graph[x]) {
      if (visited[y] == -1) {
        visited[y] = (visited[x] + 1) % 2;
        queue.enqueue(y);
      }
    }
  }
}

// 이분 그래프인지 판단하는 함수
function isBipartite(graph, visited) {
  for (let x = 1; x < visited.length; x++) {
    for (let y of graph[x]) if (visited[x] == visited[y]) return false;
  }
  return true;
}

// 테스트 케이스별 반복문
while (testCases--) {
  // 정점, 간선 구하기
  let [v, e] = input[line].split(' ').map(Number);

  // 그래프 만들기
  let graph = [];
  for (let i = 1; i <= v; i++) graph[i] = [];
  for (let i = 1; i <= e; i++) {
    // 인접 노드 표시
    let [u, v] = input[line + i].split(' ').map(Number);
    graph[u].push(v);
    graph[v].push(u);
  }

  // 방문 여부 : 방문 X는 -1, 레드 0, 블루 1
  let visited = new Array(v + 1).fill(-1);

  // 인접한 노드 확인하기
  for (let i = 1; i <= v; i++) {
    if (visited[i] == -1) bfs(i, graph, visited);
  }

  line += e + 1; // 다음 테스트 케이스

  if (isBipartite(graph, visited)) console.log('YES');
  else console.log('NO');
}
