let fact = 1;
function factorial(n) {
  for (let i = 1; i <= n; i++) {
    fact = fact * i;
  }
  console.log(fact);
}
factorial(5);
