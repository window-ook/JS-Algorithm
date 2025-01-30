// 플로이드
// 난이도 ⭐️⭐️⭐️
let file = `5
14
1 2 2
1 3 3
1 4 1
1 5 10
2 4 2
3 4 1
3 5 1
4 5 3
3 5 10
3 1 8
1 4 2
5 1 7
3 4 2
5 2 4`;
let input = file.split('\n');
let INF = 1e9;
let n = Number(input[0]);
let m = Number(input[1]);
let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(INF));
for (let i = 1; i <= n; i++) graph[i][i] = 0;
// 그래프에 간선 비용 표시
for (let i = 2; i < m + 2; i++) {
  let [a, b, cost] = input[i].split(' ').map(Number);
  graph[a][b] = Math.min(graph[a][b], cost);
}
// F.W 알고리즘 수행
for (let k = 1; k <= n; k++) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
    }
  }
}
// 정답 출력
for (let i = 1; i <= n; i++) {
  let answer = graph[i]
    .slice(1)
    .map((x) => (x === INF ? 0 : x))
    .join(' ');
  console.log(answer);
}
