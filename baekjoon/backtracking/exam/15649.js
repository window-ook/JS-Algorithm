/* N과 M
  난이도 ⭐️⭐️
1. 아이디어
- 순열 구하기

2. 시간 복잡도
N! (중복 불가능)

3. 자료구조
- arr[] 순열을 계산할 원소를 담은 배열 : int
- visited[] 방문 여부 : boolean
- selected[] 현재 원소의 인덱스 : int*/

const input = `4 2`;
const [n, m] = input.split(' ').map(Number);
let arr = [];
for (let i = 1; i <= n; i++) arr.push(i); // 순열을 계산할 원소
let visited = new Array(n).fill(false); // 방문 여부 확인
let selected = []; // 현재 인덱스 추가
let answer = '';

function dfs(arr, depth) {
  // depth 2
  if (depth == m) {
    let result = []; // 순열 결과 저장 테이블
    for (i of selected) result.push(arr[i]); // result에 순열 저장
    for (x of result) answer += x + ' '; // 정답에 순열을 저장
    answer += '\n'; // 1 2 (줄바꿈)
    return; // 이전 호출 단계로 돌아가기 = 이전 depth로 돌아감 = 백트래킹
  }

  for (let i = 0; i < arr.length; i++) {
    if (visited[i]) continue;
    selected.push(i); // depth 0 : 1, depth 1 : 2 -> 3 -> 4
    visited[i] = true; // 방문 여부 표시
    dfs(arr, depth + 1); // 다음 depth로
    selected.pop(); // return으로 돌아오면 실행됨. [1, 2]였다면 다시 [1]이 되는 것
    visited[i] = false; // 해당 인덱스를 방문한 곳에서 제거
  }
}
dfs(arr, 0);
console.log(answer);
