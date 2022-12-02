function primeNumber(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return "this is not a prime number";
    }
  }
  return "this is a prime number";
}

console.log(primeNumber(43));
