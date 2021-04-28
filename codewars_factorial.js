/*
Your task is to write function factorial
*/

const factorial = (n) => {
  let sum = 1;
  for(let i = 2; i < n + 1; i++) {
    sum *= i;
  }

  return sum;
}