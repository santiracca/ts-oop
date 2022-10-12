class MyMath {
  static readonly PI = 3.14;

  static max(...numbers: number[]) {
    return numbers.reduce((max, item) => (max > item ? max : item));
  }
}

console.log(MyMath.PI);
