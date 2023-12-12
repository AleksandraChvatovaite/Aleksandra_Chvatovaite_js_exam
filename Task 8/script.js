/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite klase "Calculator", kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
class Calculator {
  sum(a, b) {
    return a + b;
  }

  subtraction(a, b) {
    return a - b;
  }

  multiplication(a, b) {
    return a * b;
  }
  division(a, b) {
    return a / b;
  }
}

// const calculator = new Calculator();

// console.log('calculator.sum(2, 2) ===', calculator.sum(2, 2));

// console.log('calculator.subtraction(2, 2) ===', calculator.subtraction(2, 2));

// console.log('calculator.multiplication(2, 2) ===', calculator.multiplication(2, 2));

// console.log('calculator.division(2, 2) ===', calculator.division(2, 2));