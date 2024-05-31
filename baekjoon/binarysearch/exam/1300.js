// K번째 수
// 난이도 ⭐️⭐️
const fs = `3
7`;
const input = fs.split('\n');
const n = Number(input[0]); // 배열의 크기
const k = Number(input[1]); // 인덱스 K
let start = 1; // 배열에 존재할 수 있는 가장 작은 값
let end = 10 ** 10; // 배열에 존재할 수 있는 가장 큰 값
let result = 0; // K번째 숫자(출력값)

// 이진 탐색
while (start <= end) {
  let mid = parseInt((start + end) / 2); // 현재의 중간점
  let total = 0; // mid 보다 작거나 같은 데이터의 개수
  for (let i = 1; i <= n; i++) {
    total += Math.min(parseInt(mid / i), n);
  }
  if (total >= k) {
    // mid보다 작거나 같은 데이터의 개수가 k이상이라면
    result = mid; // result에 기록하기
    end = mid - 1;
  } else start = mid + 1;
}
console.log(result);
