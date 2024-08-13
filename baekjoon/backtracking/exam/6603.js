/** 로또 - 난이도 ⭐️⭐️⭐️ 
 1. 아이디어 : 49까지의 수 중에서 k개의 수를 골라서 집합을 만든다
 - 집합에 주어진 숫자로 6개를 선택하여 만들 수 있는 모든 집합을 구한다
 - 순열 (숫자 중복 사용 X, 순서가 달라도 사용한 숫자의 종류가 같으면 동일한 조합)

 2. 시간복잡도 : O(C(n,k)) - n개 중에서 k개를 선택해서 조합

 3. 자료구조 : 
 arr [] - 집합 S를 담을 배열
 selected [] - arr의 인덱스로 사용할 숫자 구하기
 visited [] - 방문 처리
 result [] - 문자열로 나타내기 전의 조합
 answer '' - 하나의 조합
 */

const fs = `7 1 2 3 4 5 6 7
 8 1 2 3 5 8 13 21 34
 0`;
const input = fs.split('\n');
for (let i = 0; i < input.length; i++) {
  let data = input[i].split(' ').map(Number);
  if (data[0] == 0)
    break; // 입력값 마지막 줄 0 -> 테스트 케이스 종료 조건
  else {
    n = data[0]; // 집합 S의 숫자 개수인 K
    arr = data.slice(1); // arr = 현재 K에 대한 집합 S
    visited = new Array(n).fill(false); // 방문 처리
    selected = []; // 집합 S의 모든 조합을 완전 탐색
    answer = ``; // 모든 조합
    dfs(arr, 0, 0);
    console.log(answer); // 집합 하나의 모든 조합을 구한 후에는 한 줄 띄우기
  }
}

function dfs(arr, depth, start) {
  // 6개가 모이면 하나의 조합 출력
  if (depth == 6) {
    let result = []; // 집합 S로 만든 조합
    for (let i of selected) result.push(arr[i]); // 조합에 인덱스에 해당하는 집합의 수를 집어넣기
    for (let x of result) answer += x + ' '; // 조합을 문자열로 바꾸기
    answer += '\n'; // 조합 하나가 출력되면 줄바꿈
    return; // 백트래킹
  }

  for (let i = start; i < arr.length; i++) {
    if (visited[i]) continue;
    selected.push(i);
    visited[i] = true;
    dfs(arr, depth + 1, i + 1);
    selected.pop();
    visited[i] = false;
  }
}
