function sumOfnumbers(number) {
  let sum = 0;

  for (let i = 1; i <= number; i++) {
    sum += i;
  }
  console.log("Sum of the given number", +sum);
}
sumOfnumbers(10);
