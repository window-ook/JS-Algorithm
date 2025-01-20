// 회문
// ⭐️⭐️
let file = `7
abba
summuus
xabba
xabbay
comcom
comwwmoc
comwwtmoc`;
let input = file.split('\n');
let testCase = Number(input[0]);

// 회문을 판단하는 함수 palindrome
const palindrome = (str) => str == str.split('').reverse().join('');

// 순수 회문이면 0 출력
for (let tc = 1; tc <= testCase; tc++) {
  let str = input[tc];
  if (palindrome(str)) console.log(0);
  // 아니면 회문을 가운데로 나눠서 반씩 비교해보기
  else {
    let n = str.length;
    let found = false;
    for (let i = 0; i < n / 2; i++) {
      if (str[i] != str[n - i - 1]) {
        if (palindrome(str.slice(0, i) + str.slice(i + 1, n))) found = true;
        if (palindrome(str.slice(0, n - i - 1) + str.slice(n - i, n)))
          found = true;
        break;
      }
    }
    if (found) console.log(1);
    else console.log(2);
  }
}
