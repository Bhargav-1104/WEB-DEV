function calc(a, b, operation) {
  result = operation(a, b);
  return result;
}
function sum(a, b) {
  return a + b;
}
function multi(a, b) {
  return a * b;
}
function div(a, b) {
  return a / b;
}

console.log(calc(1, 2, sum));
