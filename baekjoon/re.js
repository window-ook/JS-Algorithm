const fs = `7 7
2 0 0 0 1 1 0
0 0 1 0 1 2 0
0 1 1 0 1 0 0
0 1 0 0 0 0 0
0 0 0 0 0 1 1
0 1 0 0 0 0 0
0 1 0 0 0 0 0`;
const input = fs.split('\n');
const [n, m] = input[0].split(' ').map(Number);
let data = [];
let temp = [];
for (let i = 1; i <= n; i++) {
  let line = input[i].split(' ').map(Number);
  data.push(line);
  temp.push(new Array(m).fill(0));
}
let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];
let result = 0;

// 바이러스 전파시키기
function virus(x, y) {
  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
    if (temp[nx][ny] == 0) {
      temp[nx][ny] = 2;
      virus(nx, ny);
    }
  }
}

// 안전구역 크기 구하기
function getSafe() {
  let safe = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (temp[i][j] == 0) safe += 1;
    }
  }
  return safe;
}

// 조합을 만들면서 바이러스를 전파하고, 조합마다 안전구역의 크기를 구한뒤 가장 큰 값을 출력
function dfs(count) {
  // 벽 3개를 세웠으면 초기 맵을 벽 세운 후 맵에 복사하기
  if (count == 3) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        temp[i][j] = data[i][j];
      }
    }

    // 그리고 바이러스 전파시킨 후
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (temp[i][j] == 2) virus(i, j);
      }
    }
    // 조합 중에서 안전영역이 가장 큰 구역을 저장하기
    result = Math.max(result, getSafe());
    return;
  }

  // 벽 세우기
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (data[i][j] == 0) {
        data[i][j] = 1;
        dfs(count + 1);
        data[i][j] = 0;
      }
    }
  }
}

dfs(0);
console.log(result);
