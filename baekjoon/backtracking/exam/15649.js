/* N과 M - 난이도 ⭐️⭐️

  1. 아이디어
  - 순열 구하기

  2. 자료구조
  - arr[] 순열을 계산할 원소를 담은 배열 : int
  - visited[] 방문 여부 : boolean
  - selected[] 현재 원소의 인덱스 : int */

const input = `4 2`;
const [n, m] = input.split(' ').map(Number);
let arr = [];
for (let i = 1; i <= n; i++) arr.push(i); // 순열을 계산할 원소
let visited = new Array(n).fill(false); // 방문 여부 확인
let selected = []; // 현재 인덱스 추가
let answer = '';

function dfs(arr, depth) {
  // depth가 m이랑 같으면 이전 depth에 선택된 인덱스를 arr에서 찾아 순열로 저장해서 정답에 포함시켜야 함
  if (depth == m) {
    let result = []; // 순열 결과 저장 테이블
    for (i of selected) result.push(arr[i]); // selected에 넣어둔 arr의 인덱스에 해당하는 숫자들을 result에 넣기
    for (x of result) answer += x + ' '; // 정답에 result에 있는 하나의 순열을 저장
    answer += '\n'; // 줄바꿈
    return; // 이전 depth로 돌아감
  }

  for (let i = 0; i < arr.length; i++) {
    if (visited[i]) continue; // (1,1) / (2,2) 방지용으로 넘어가게 함
    selected.push(i); // 순열에 넣을 arr의 인덱스
    visited[i] = true; // 방문 처리 : 같은 숫자 반복 방지
    dfs(arr, depth + 1); // 다음 depth를 재귀 호출
    selected.pop(); // 순열 인덱스에서 가장 마지막 인덱스 제거
    visited[i] = false; // 해당 인덱스를 방문한 곳에서 제거
  }
}
dfs(arr, 0);
console.log(answer);
