/** A -> B - 난이도 ⭐️⭐️ */
const fs = `2 162`;

let [a, b] = fs.split(' ').map(Number);
let flag = false;
let cnt = 1; // 연산 횟수

while (a <= b) {
  if (a == b) {
    flag = true;
    break;
  }
  if (b % 2 == 0) b = parseInt(b / 2);
  else if (b % 10 == 1) b = parseInt(b / 10);
  else break;
  cnt += 1;
}

if (flag) console.log(cnt);
else console.log(-1);
