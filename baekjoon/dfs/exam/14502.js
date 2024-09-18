/** 연구소 - 난이도 ⭐️⭐️⭐️

    1. 아이디어
    벽을 3개 설치하는 모든 조합을 구한다
    벽을 설치하고 바이러스가 퍼지게 한다
    조합마다 0으로 표시된 위치를 구한다 
    그중 가장 큰 영역을 출력한다

    2. 자료구조
 */
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
let data = []; // 초기 맵
let temp = []; // 벽을 설치한 후의 맵
for (let i = 1; i <= n; i++) {
  data.push(input[i].split(' ').map(Number));
  temp.push(new Array(m).fill(0));
}
let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];
let result = 0;

// 바이러스를 퍼뜨리기
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

// 안전영역 크기 구하기
function getSafe() {
  let safe = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (temp[i][j] == 0) safe += 1;
    }
  }
  return safe;
}

// 벽을 세우면서 매번 조합의 안전 영역 크기 계산
function dfs(count) {
  // 벽 3개를 세웠으면 초기 맵을 벽 세운 후 맵에 복사하기
  if (count == 3) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        temp[i][j] = data[i][j]; // 벽을 세운 후의 맵에 초기 맵을 복사
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

  // 빈 공간에 벽 세우면서 조합 만들기
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
