function simpleSummation (n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}


function recursiveSummation (n) {
  if (n <= 1) return n;
  return n + recursiveSummation(n - 1);
}

function apSum (n) {
  // formula for sum of an AP has been simplified  based on the criteria: start counting from 1 and a common difference of 1
  return (n / 2) * (1 + n);
}


