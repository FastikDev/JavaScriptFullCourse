const start = 30;
const end = 50;
let result = 0;

for (let i = start; i <= end; i += 1) {
  if (i % 5 === 0) {
    console.log(i);
  } else if (i % 2 === 0 && i % 4 !== 0) {
    result += i;
  } else if (i % 3 === 0) {
    result -= i;
  } else if (i % 4 === 0) {
    result *= i;
    continue;
  }
}
