let rows = 5;

let pattern = "";

for (let n = 1; n <= rows; n++) {
  for (let num = 1; num <= n; num++) {
    pattern += num;
  }

  pattern += "\n";
}
console.log(pattern);
