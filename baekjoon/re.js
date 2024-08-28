const fs = `6 3
1 2
2 3
3 4
6 5
1 2
2 3
3 4
4 5
5 6
6 6
1 2
2 3
1 3
4 5
5 6
6 4
0 0`;
const input = fs.split('\n');
let line = 0;
let testCase = 1;
while (true) {
  let [n, m] = input[line].split(' ').map(Number);
  if (n == 0 && m == 0) break;
  graph = [];
  for (let i = 1; i <= n; i++) graph[i] = [];
  for (let i = 1; i <= m; i++) {
    let [x, y] = input[line + i].split(' ').map(Number);
    graph[x].push(y);
    graph[y].push(x);
  }
  visited = new Array(n + 1).fill(false);
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (!visited[i]) if (!isCycle(i, 0)) count++;
  }
  if (count == 0) console.log(`Case ${testCase}: No trees.`);
  else if (count == 1) console.log(`Case ${testCase}: There is one tree`);
  else console.log(`Case ${testCase}: A tree of ${count} trees`);
  line += m + 1;
  testCase++;
}

function isCycle(x, prev) {
  visited[x] = true;
  for (let y of graph[x]) {
    if (!visited[y]) {
      if (isCycle(y, x)) return true;
    } else if (y != prev) return true;
  }
  return false;
}
