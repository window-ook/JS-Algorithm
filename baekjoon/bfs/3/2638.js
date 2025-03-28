// 치즈
// ⭐️⭐️⭐️

let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];
const fs = `8 9
0 0 0 0 0 0 0 0 0
0 0 0 1 1 0 0 0 0
0 0 0 1 1 0 1 1 0
0 0 1 1 1 1 1 1 0
0 0 1 1 1 1 1 0 0
0 0 1 1 0 1 1 0 0
0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0`;
const input = fs.split('\n');
const [n, m] = input[0].split(' ').map(Number);
let graph = [];
for (let i = 1; i <= n; i++) {
  let row = input[i].split(' ').map(Number);
  graph.push(row);
}

function bfs() {
  let visited = [];
  for (let i = 0; i < n; i++) visited.push(new Array(m).fill(false));
  visited[0][0] = true;
  let queue = new Queue();
  queue.enqueue([0, 0]);
  while (queue.getLength() != 0) {
    let [x, y] = queue.dequeue();
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
      if (!visited[nx][ny]) {
        if (graph[nx][ny] >= 1) graph[nx][ny] += 1;
        else {
          queue.enqueue([nx, ny]);
          visited[nx][ny] = true;
        }
      }
    }
  }
}

function melt() {
  let finish = true;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (graph[i][j] >= 3) {
        graph[i][j] = 0;
        finish = false;
      } else if (graph[i][j] == 2) graph[i][j] = 1;
    }
  }
  return finish;
}

let result = 0;
while (true) {
  bfs();
  if (melt()) {
    console.log(result);
    break;
  } else result += 1;
}
