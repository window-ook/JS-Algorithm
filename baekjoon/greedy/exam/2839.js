/** 설탕 배달 - 난이도 ⭐️⭐️
 
  1.아이디어 : 봉지는 5키로와 3키로가 있음. 최대한 5키로를 많이 쓰는 문제 = 최대한 3키로를 적게 쓰는 문제
*/

const fs = `17`;
let n = Number(data.split('\n')[0]);

let cnt = 0;
let not = false;

while (n >= 0) {
  if (n % 5 == 0 || n == 0) {
    cnt += parseInt(n / 5);
    console.log(cnt);
    not = true;
    break;
  }
  n -= 3;
  cnt += 1;
}

if (not == false) {
  console.log(-1);
}
