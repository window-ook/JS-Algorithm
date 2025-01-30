// 뱀 ⭐️⭐️⭐️
let n = Number(input[0]); // 보드 한 변 크기
let k = Number(input[1]); // 사과 개수
let data = Array.from(Array(n + 1), () => Array(n + 1).fill(0)); // (n + 1) * (n + 1) 보드
// 사과 위치는 1로 표시하기
for (let i = 2; i <= k + 1; i++) {
  let [x, y] = input[i].split(' ').map(Number);
  data[x][y] = 1;
}
let l = Number(input[k + 2]); // 방향 전환 횟수
let info = []; // 방향 전환 정보
for (let i = k + 3; i < k + 3 + l; i++) {
  let [x, c] = input[i].split(' ');
  info.push([Number(x), c]);
}
// 처음에는 오른쪽을 보고 있으므로 (동, 남, 서, 북)
let dx = [0, 1, 0, -1]; // 상하
let dy = [1, 0, -1, 0]; // 좌우
function turn(direction, c) {
  // L은 왼쪽이라 direction을 -1
  if (c == 'L') {
    direction = direction - 1;
    if (direction == -1) direction = 3; // 동에서 좌측 90도는 북
  } else direction = (direction + 1) % 4; // D는 오른쪽이라 direction +1
  return direction;
}

let [x, y] = [1, 1]; // 뱀의 머리 위치
data[x][y] = 2; // 뱀의 존재 위치는 2로 표시하기
let direction = 0; // 처음에는 동쪽으로 진행
let time = 0; // 경과한 시간
let index = 0; // 다음에 회전할 정보
let q = new Queue();
q.enqueue([x, y]);
while (true) {
  let nx = x + dx[direction];
  let ny = y + dy[direction];
  if (1 <= nx && nx <= n && 1 <= ny && ny <= n && data[nx][ny] != 2) {
    // 사과가 없는 경우
    if (data[nx][ny] == 0) {
      data[nx][ny] = 2;
      q.enqueue([nx, ny]);
      let [px, py] = q.dequeue(); // 꼬리 위치
      data[px][py] = 0; // 제거
    }
    // 사과가 있는 경우 꼬리 그대로 둚
    if (data[nx][ny] == 1) {
      data[nx][ny] = 2;
      q.enqueue([nx, ny]);
    }
  } else {
    // 벽이나 뱀의 몸통에 부딪혀서 게임 종료
    time += 1;
    break;
  }
  [x, y] = [nx, ny]; // 다음 위치로 머리 이동
  time += 1;
  if (index < l && time == info[index][0]) {
    direction = turn(direction, info[index][1]);
    index += 1;
  }
}
console.log(time);
