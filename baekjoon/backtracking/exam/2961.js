/** 도영이가 만든 맛있는 음식 - 난이도 ⭐️⭐️⭐️ 
 1. 아이디어 : 가능한 모든 경우의 수를 구하면 된다.
 - depth가 1이면 바로 조합의 신맛과 쓴맛의 차이를 계산해서 최소값 비교
 
 2. 시간 복잡도 : O(2^n)

 3. 자료 구조 : 
 arr[] : 재료가 담긴 배열 
 result[] : 재료의 인덱스를 담을 배열
 visited[] : 방문 처리 배열
*/

// 도영이가 만든 음식 -> 0 만들기 복습
const fs = `2
3 8
5 8`;
const input = fs.split('\n');
const n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
  let [x, y] = input[i].split(' ').map(Number);
  arr.push([x, y]);
}
let visited = new Array(n).fill(false);
let result = [];
let answer = 1e9;

function dfs(depth, start) {
  // 가능한 모든 일반조합 : 재료가 2개만 되어도
  if (depth >= 1) {
    let totalX = 1;
    let totalY = 0;
    for (i of result) {
      let [x, y] = arr[i];
      totalX *= x;
      totalY += y;
    }
    answer = Math.min(answer, Math.abs(totalX - totalY));
  }

  for (let i = start; i < n; i++) {
    if (visited[i]) true;
    result.push(i);
    visited[i] = true;
    dfs(depth + 1, i + 1);
    result.pop();
    visited[i] = false;
  }
}
dfs(0, 0);
console.log(answer);
