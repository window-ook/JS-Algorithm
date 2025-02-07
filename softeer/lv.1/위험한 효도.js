let file = `10 3 10`;
let input = file.split('\n');
let [a, b, d] = input[0].split(' ').map(Number);
let back1 = d > a ? parseInt(d / a) : 0;
let back2 = d > b ? parseInt(d / b) : 0;
let total = 2 * d + back2 * a + back1 * b;
console.log(total);
