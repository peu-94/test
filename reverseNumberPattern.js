let n = 5;
let pattern = "";

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i + 1; j++) {
    pattern += n - j - i + 2 + " ";
  }
  pattern += "\n";
}
console.log(pattern);
