/** 회문 - 난이도 ⭐️⭐️ */
const fs = `7
abba
summuus
xabba
xabbay
comcom
comwwmoc
comwwtmoc`;
const input = fs.split('\n');
const testCases = Number(input[0]);
function palindrome(x) {
  return x == x.split('').reverse().join('');
}
for (tc = 1; tc <= testCases; tc++) {
  let data = input[tc];
  if (palindrome(data)) console.log(0);
  else {
    let found = false;
    let n = data.length;
    for (i = 0; i < parseInt(n / 2); i++) {
      if (data[i] != data[n - i - 1]) {
        if (palindrome(data.slice(0, i) + data.slice(i + 1, n))) found = true;
        if (palindrome(data.slice(0, n - i - 1) + data.slice(n - i, n)))
          found = true;
        break;
      }
    }
    if (found) console.log(1);
    else console.log(2);
  }
}
