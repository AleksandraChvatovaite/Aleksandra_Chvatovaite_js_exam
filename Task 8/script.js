/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite klase "Calculator", kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
class Calculator {
  num1;
  num2;
  constructor(sk1, sk2) {
    this.num1 = sk1;
    this.num2 = sk2;
  }

  sum () {
    return this.num1 + this.num2;
  }

  subtraction () {
    return this.num1 - this.num2;
  }

  multiplication() {
    return this.num1 * this.num2;
  }
  division() {
    return this.num1 / this.num2;
  }
}

