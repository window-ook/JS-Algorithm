// 숫자 카드 2
// 난이도 ⭐️⭐️
// lowerBound, upperBound, countByRange 구현하여 사용하기
function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) end = mid; // 최대한 왼쪽으로 이동
    else start = mid + 1;
  }
  return end;
}

function upperBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] > target) end = mid; // 최대한 오른쪽으로 이동
    else start = mid + 1;
  }
  return end;
}

// 값이 [leftValue, rightValue]인 데이터 개수를 반환한다. end는 배열의 길이로 결정한다.
function countByRange(arr, leftValue, rightValue) {
  let rightIndex = upperBound(arr, rightValue, 0, arr.length);
  let leftIndex = lowerBound(arr, leftValue, 0, arr.length);
  return rightIndex - leftIndex;
}

const fs = `10
6 3 2 10 10 10 -10 -10 7 3
8
10 9 -5 2 3 4 5 -10`;
const input = fs.split('\n');
const n = Number(input[0]); // 데이터 수 = 상근이가 가지고 있는 카드 개수
const arr = input[1].split(' ').map(Number); // 데이터
const m = Number(input[2]); // 쿼리의 수 = 몇 개인지 구해야 하는 수
const query = input[3].split(' ').map(Number); // 쿼리
arr.sort((a, b) => a - b); // 이진탐색을 위한 오름차순 정렬(NlogN)

answer = '';
for (let i = 0; i < m; i++) {
  let cnt = countByRange(arr, query[i], query[i]); // 각 쿼리의 개수
  answer += cnt + ' ';
}
console.log(answer);
