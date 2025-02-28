function maximumIndependentSet(n, m, edges) {
  // 그래프 인접 리스트 생성
  const graph = Array.from({ length: n + 1 }, () => []);
  edges.forEach(([u, v]) => {
    graph[u].push(v);
    graph[v].push(u);
  });

  const visited = new Array(n + 1).fill(false);
  let result = 0;

  // BFS로 연결된 컴포넌트를 탐색
  function bfs(start) {
    const queue = [start];
    visited[start] = true;
    const component = []; // 현재 컴포넌트의 정점들 저장

    while (queue.length > 0) {
      const node = queue.shift();
      component.push(node);

      for (const neighbor of graph[node]) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      }
    }

    return component;
  }

  // 연결된 컴포넌트에서 최대 독립 집합 크기 계산
  function calculateIndependentSet(component) {
    const size = component.length;

    // DP 배열 초기화
    const dp = Array(size + 1).fill(0);
    dp[1] = 1; // 첫 번째 정점 선택 시

    for (let i = 2; i <= size; i++) {
      dp[i] = Math.max(dp[i - 1], dp[i - 2] + 1);
    }

    return dp[size];
  }

  // 모든 정점에 대해 연결된 컴포넌트 처리
  for (let node = 1; node <= n; node++) {
    if (!visited[node]) {
      const component = bfs(node); // 하나의 연결된 컴포넌트를 탐색
      result += calculateIndependentSet(component); // 최대 독립 집합 크기 합산
    }
  }

  return result;
}

// 입력 처리
const input = `7 6
1 2
2 3
1 3
4 5
5 6
6 7`;

const lines = input.trim().split('\n');
const [n, m] = lines[0].split(' ').map(Number);
const edges = lines.slice(1).map((line) => line.split(' ').map(Number));

// 결과 출력
console.log(maximumIndependentSet(n, m, edges)); // 출력: 3
