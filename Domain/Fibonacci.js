class Fibonacci {
  static fibonacci(n) {
    if (n < 2) {
      return 1;
    } else {
      return Fibonacci.fibonacci(n - 2) + Fibonacci.fibonacci(n - 1);
    }
  }
}

module.exports = Fibonacci;
