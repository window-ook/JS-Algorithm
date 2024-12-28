// 인구 이동
// ⭐️⭐️⭐️
// queue = 현재 선택된 국가의 위치를 담는 큐
// union = while 안에서 인구 이동 1턴 동안 쓰일 연합,
// united = bfs에서 사용되는 이번 턴의 연합국 리스트

const [n, l, r] = input[0].split(' ').map(Number);
let graph = [];
for (let i = 1; i <= n; i++) {
  let row = input[i].split(' ').map(Number);
  graph.push(row);
}
let dx = [-1, 0, 1, 0];
let dy = [0, -1, 0, 1];
let totalCount = 0;

while (true) {
  let union = Array.from(Array(n), () => Array(n).fill(-1)); // [[-1,-1], [-1,-1]]
  let index = 0; // index번 째 인구 이동
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (union[i][j] == -1) {
        bfs(i, j, index, union);
        index++;
      }
    }
  }
  if (index == n * n) break;
  totalCount += 1;
}
console.log(totalCount); // 총 인구 이동 횟수

function bfs(x, y, index, union) {
  let united = [[x, y]]; // 이번 턴 연합국 리스트
  union[x][y] = index;
  let q = new Queue();
  q.enqueue([x, y]);
  let summary = graph[x][y]; // 연합의 총 인구
  let cnt = 1; // 연합국 수
  while (q.getLength() != 0) {
    let [x, y] = q.dequeue();
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (0 <= nx && nx < n && 0 <= ny && ny < n && union[nx][ny] == -1) {
        // 국가간 인구 차이가 l이상 r이하라면 연합 형성
        let diff = Math.abs(graph[nx][ny] - graph[x][y]);
        if (l <= diff && diff <= r) {
          q.enqueue([nx, ny]); // 큐에 넣음
          union[nx][ny] = index; // 연합에 포함
          united.push([nx, ny]); // 연합국 리스트에 추가
          summary += graph[nx][ny]; // 연합국 인구에 추가
          cnt += 1;
        }
      }
    }
  }

  for (let unit of united) {
    let [i, j] = unit; // 연합의 국가를 순회
    graph[i][j] = parseInt(summary / cnt); // 각 국가에 인구 분배
  }
}
