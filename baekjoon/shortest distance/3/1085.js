// 친구 ⭐️⭐️⭐️

let file = `5
NYNNN
YNYNN
NYNYN
NNYNY
NNNYN`;
let input = file.split('\n');
let n = Number(input[0]);
let INF = 1e9;
let graph = [new Array(n + 1).fill(INF)];

for (let i = 1; i <= n; i++) {
  graph.push(new Array(n + 1).fill(INF));
  let line = input[i].split('');
  for (let j = 0; j < n; j++) if (line[j] == 'Y') graph[i][j + 1] = 1;
}

for (let i = 1; i <= n; i++) graph[i][i] = 0;
for (let k = 1; k <= n; k++) {
  for (let a = 1; a <= n; a++) {
    for (let b = 1; b <= n; b++) {
      let link = graph[a][k] + graph[k][b];
      if (graph[a][b] > link) graph[a][b] = link;
    }
  }
}

let result = Array(n + 1).fill(0);
for (let a = 1; a <= n; a++) {
  for (let b = 1; b <= n; b++) {
    if (a != b && graph[a][b] <= 2) result[a]++;
  }
}

console.log(Math.max(...result));
