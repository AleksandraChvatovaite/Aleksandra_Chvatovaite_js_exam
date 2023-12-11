/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite klasę "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class Movie {
  title;
  director;
  budget;
  constructor(titulas, direktorius, biudzetas) {
    this.title = titulas;
    this.director = direktorius;
    this.budget = biudzetas;
  }
//   wasExpensive() {
//     if (this.budget > 100000000) {
//       return true;
//     } else {
//       return false;
//     }
//   }
}