const end = 1000;
let result = 0;

for (let i = 1; i <= end; i += 1) {
  result += i;
}

const div = (result / 1234) | 0;
const mod = result % 1234;
console.log(div > mod);
