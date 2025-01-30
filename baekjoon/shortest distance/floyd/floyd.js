let INF = 1e9; // 무한을 의미하는 값으로 10억을 설정
let n = 5; // 노드의 개수

// graph[i][j]는 i에서 j로 가기 위한 초기 비용(간선 비용)
let graph = [
  // 자기 자신으로 가는 비용은 0으로 초기화
  [INF, INF, INF, INF, INF, INF], // 인덱스 0은 사용하지 않음
  [INF, 0, 1, 5, INF, INF], // 1번 노드의 간선들
  [INF, 7, 0, 2, 2, INF], // 2번 노드의 간선들
  [INF, 2, INF, 0, INF, 6], // 3번 노드의 간선들
  [INF, INF, 2, INF, 0, INF], // 4번 노드의 간선들
  [INF, INF, INF, 1, INF, 0], // 5번 노드의 간선들
];

// 점화식에 따라 플로이드 워셜 알고리즘을 수행
for (let k = 1; k <= n; k++) {
  for (let a = 1; a <= n; a++) {
    for (let b = 1; b <= n; b++) {
      let cost = graph[a][k] + graph[k][b];
      graph[a][b] = Math.min(graph[a][b], cost);
    }
  }
}

// 수행된 결과를 출력
for (let a = 1; a <= n; a++) {
  let line = '';
  for (let b = 1; b <= n; b++) {
    if (graph[a][b] == INF) line += 'INF ';
    else line += graph[a][b] + ' ';
  }
  console.log(line);
}
