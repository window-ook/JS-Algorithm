/** 잃어버린 괄호 - 난이도 ⭐️⭐️ */
const fs = `55-50+40`;
const group = fs.split('-');

let answer = 0;
for (let i = 0; i < group.length; i++) {
  let curr = group[i]
    .split('+')
    .map(Number)
    .reduce((a, b) => a + b);
  i == 0 ? (answer += curr) : (answer -= curr);
}

console.log(answer);
