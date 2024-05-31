// 병사 배치하기
// 난이도 ⭐️⭐️
// 가장 긴 증가하는 부분 수열 찾기  = LIS, Longest Increasing Subsequence
function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = (start + end) / 2;
    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }
  return end;
}
const fs = `7
15 11 4 8 5 2 4`;
const input = fs.split('\n');
const n = Number(input[0]);
const pow = input[1].split(' ').map(Number);
pow.reverse(); // LIS 문제로 변환시키기

let d = [0]; // LIS 배열
for (x of pow) {
  // 마지막 원소보다 현재 원소가 크다면 가장 뒤에 넣기
  if (d[d.length - 1] < x) d.push(x);
  else {
    // 현재 원소가 작거나 같다면 가능한 왼쪽에 있는 원소와 교체하기
    let index = lowerBound(d, x, 0, d.length);
    d[index] = x;
  }
}
console.log(n - (d.length - 1));
