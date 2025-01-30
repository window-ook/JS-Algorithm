// 4연산
// ⭐️⭐️⭐️
// *, +, -, / 를 순회하면서 다음 값을 구해서 판단하는 접근이 필요함

const fs = '7 256';
let [s, t] = fs.split(' ').map(Number);
let queue = new Queue();
queue.enqueue([s, '']);
let visited = new Set([s]);
let found = false;

if (s == t) {
  console.log(0);
  process.exit();
}

while (queue.getLength() != 0) {
  let [current, ops] = queue.dequeue();
  if (current > 1e9) continue;
  if (current == t) {
    console.log(ops);
    found = true;
    break;
  }

  for (let op of ['*', '+', '-', '/']) {
    let next = current;
    if (op == '*') next *= current;
    if (op == '+') next += current;
    if (op == '-') next -= current;
    if (op == '/' && current != 0) next = 1;
    if (!visited.has(next)) {
      queue.enqueue([next, ops + op]);
      visited.add(next);
    }
  }
}

if (!found) console.log(-1);
