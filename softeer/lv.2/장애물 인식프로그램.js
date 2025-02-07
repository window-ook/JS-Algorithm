// DFS, BFS

let file = `7
1110111
0110101
0110101
0000100
0110000
0111110
0110000`;
let input = file.split('\n');
let n = Number(input[0]);
let graph = input.slice(1).map((row) => row.split('').map(Number));
let dx = [1, 0, -1, 0];
let dy = [0, -1, 0, 1];
let result = [];
let visited = Array.from({ length: n }, () => Array(n).fill(false));
function dfs(x, y) {
  let count = 1; // 한 지역의 영역 크기
  visited[x][y] = true;

  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
      if (graph[nx][ny] == '1' && !visited[nx][ny]) count += dfs(nx, ny);
    }
  }

  return count;
}

// 그래프 [i][j]가 '1'이고 방문한 적 없으면 지역의 수를 증가시키고 해당 지역 전체의 수를 result에 추가
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (graph[i][j] == '1' && !visited[i][j]) {
      result.push(dfs(i, j));
    }
  }
}

// 지역 수(result.length) 출력
console.log(result.length);

// 각 지역의 영역 크기
result.sort((a, b) => a - b);
for (let x of result) console.log(x);
