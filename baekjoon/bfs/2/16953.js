// A -> B
// ⭐️⭐️

const fs = `2 162`;
const [start, target] = fs.split(' ').map(Number);
let found = false;
let visited = new Set();
let queue = new Queue();
queue.enqueue([start, 0]);

while (queue.getLength() != 0) {
  let [curr, count] = queue.dequeue();

  if (curr > 1e9) continue;
  if (curr == target) {
    console.log(count + 1);
    found = true;
    break;
  }

  for (let oper of ['*', '+']) {
    let next = curr;
    if (oper == '*') next *= 2;
    if (oper == '+') {
      next *= 10;
      next += 1;
    }
    if (!visited.has(next)) {
      queue.enqueue([next, count + 1]);
      visited.add(next);
    }
  }
}

if (!found) console.log(-1);
