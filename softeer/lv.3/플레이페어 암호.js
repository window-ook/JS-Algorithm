let file = require('fs').readFileSync('/dev/stdin');
let input = file.toString().trim().split('\n');
let [message, key] = input;

// 5x5 테이블 생성
let uniqueKey = [...new Set(key.replace(/J/g, 'I'))];
let usedChars = new Set(uniqueKey);
let alphabet = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(65 + i)
).filter((v) => v !== 'J');
let graph = Array.from({ length: 5 }, () => Array(5).fill(''));
let positionMap = {};
let table = [...uniqueKey, ...alphabet.filter((ch) => !usedChars.has(ch))];

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    let char = table[i * 5 + j];
    graph[i][j] = char;
    positionMap[char] = [i, j];
  }
}

// 메시지를 2글자씩 묶기
let pairs = [];
message = message.replace(/J/g, 'I');
for (let i = 0; i < message.length; i++) {
  let first = message[i];
  let second = message[i + 1] || null;

  if (first === second) {
    if (first === 'X') {
      pairs.push(['X', 'Q']); // XX → XQ
    } else {
      pairs.push([first, 'X']);
    }
  } else if (second === null) {
    if (first === 'X') {
      pairs.push(['X', 'X']); // 마지막이 X면 XX
    } else {
      pairs.push([first, 'X']);
    }
  } else {
    pairs.push([first, second]);
    i++; // 2개씩 묶기 때문에 +1
  }
}

// 암호화
let answer = [];
for (let [char1, char2] of pairs) {
  let [i1, j1] = positionMap[char1];
  let [i2, j2] = positionMap[char2];

  if (i1 === i2) {
    // 같은 행
    answer.push(graph[i1][(j1 + 1) % 5]);
    answer.push(graph[i2][(j2 + 1) % 5]);
  } else if (j1 === j2) {
    // 같은 열
    answer.push(graph[(i1 + 1) % 5][j1]);
    answer.push(graph[(i2 + 1) % 5][j2]);
  } else {
    // 사각형
    answer.push(graph[i1][j2]);
    answer.push(graph[i2][j1]);
  }
}

console.log(answer.join(''));
