function bf(start) {
  dist[start] = 0; // 시작 노드 초기화
  for (let i = 0; i < n; i++) {
    // 전체 n번의 라운드를 반복
    for (let j = 0; j < m; j++) {
      // 매 반복마다 '모든 간선'을 확인
      let [cur, nextNode, cost] = edges[j];
      // 현재 간선을 거쳐서 다른 노드로 이동하는 거리가 더 짧은 경우
      if (dist[cur] != INF && dist[nextNode] > dist[cur] + cost) {
        dist[nextNode] = dist[cur] + cost;
        if (i == n - 1) return true; // 음의 사이클이 존재한다면 true 반환
      }
    }
  }
  return false; // 음의 사이클이 존재하지 않으면 false 반환
}
let INF = 1e9; // 무한을 의미하는 값으로 10억을 설정
let n = 6; // 노드의 개수
let m = 9; // 간선의 개수
// 모든 간선에 대한 정보를 담는 리스트 만들기
let edges = [
  // [a, b, c]: a에서 b로 가는 비용이 c라는 의미
  [1, 2, 6],
  [1, 3, 2],
  [2, 3, 2],
  [2, 4, 2],
  [3, 5, 1],
  [4, 6, 2],
  [5, 2, 1],
  [5, 4, 3],
  [5, 6, 4],
];
let dist = new Array(n + 1).fill(INF); // 최단 거리를 모두 무한으로 초기화
// 벨만 포드 알고리즘 수행
let negativeCycle = bf(1); // 1번 노드가 시작 노드
if (negativeCycle) console.log(-1);
else {
  for (let i = 2; i <= n; i++) {
    // 1번 노드를 제외한 다른 노드들로 가기 위한 최단 거리 출력
    // 도달할 수 없는 경우-1을 출력
    if (dist[i] == INF) console.log(-1);
    // 도달할 수 있는 경우 거리를 출력
    else console.log(dist[i]);
  }
}
