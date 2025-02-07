// 두 정수 a,b를 입력 받습니다.
// 게임에서 이기면 현재 가진 자산의 a%만큼 증가, 지면 현재 가진 자산의 b%만큼 감소하는 게임이 있습니다.
// 이 게임을 10000번 진행한 후의 보유 자산이 게임을 하지 않았을 때의 자산보다 클 확률 최소값을 구하시오.
// **실행시간 제한** 1초 이내
// 예제
// 입력 1 3
// 출력 75.38 (소수점 둘째자리까지)

let file = `2 10`;
let input = file.split('\n');
let [a, b] = input[0].split(' ').map(Number);

let low = 0;
let high = 10000;

while (low <= high) {
  let mid = Math.floor((high + low) / 2);
  let newWon = 10000;
  for (let i = 0; i < mid; i++) newWon *= (100 + a) / 100;
  for (let i = 0; i < 10000 - mid; i++) newWon *= (100 - b) / 100;
  if (newWon < 10000) low = mid + 1;
  else high = mid - 1;
}

console.log((low / 100).toFixed(2));
