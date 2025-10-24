
// NOTE: NEVER EVER EVER USE THIS IN ANY REAL PROJECT, this is just for ease in future assignments

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter your name: ', (name) => {
  console.log(`Hello, ${name}!`);
  rl.close();
});

console.log("code after input");
