class Fibonacci {
  static fibonacci(n) {
    if (n <= 1) return n;
    else return Fibonacci.fibonacci(n - 1) + Fibonacci.fibonacci(n - 2);
  }
}

module.exports = Fibonacci;
