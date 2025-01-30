/** 예산 - 난이도 ⭐️⭐️
  1. 아이디어
  - 배정된 총 예산이 조건을 만족한다면, 상한 금액을 증가(최대화가 목표)시킨다.
  - 배정된 총 예산이 조건을 만족하지 못한다면, 상한 금액을 감소시킨다. */
const fs = `5
70 80 30 40 100
450`;
const input = fs.split('\n');
const n = Number(input[0]); // N 지방 수
const arr = input[1].split(' ').map(Number); // 지방의 요청
const m = Number(input[2]); // M 국가예산

// 상한액의 최솟값과 최댓값 초기화
// 반복문 안에서 중앙값과 조건문 설정하기
let start = 1;
let end = arr.reduce((a, b) => Math.max(a, b));
let result = 0; // 구할 상한액

while (start <= end) {
  let mid = parseInt((start + end) / 2); // 현재 중간점(상한액)
  let total = 0; // 예산 배정
  for (x of arr) {
    total += Math.min(x, mid);
  }

  // 국가예산과 비교
  if (total <= m) {
    result = mid;
    start = mid + 1;
  } else {
    end = mid - 1; // 상한액 감소
  }
}
console.log(result);
