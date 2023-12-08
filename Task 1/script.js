/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
div elemente su id "output" viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */

'use strict';
console.log('script.js file was loaded');

const els = {
  formEl: document.forms[0],
  inputEl: document.getElementById('search'),
  divOutputEl: document.getElementById('output'),
}

els.formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  const kilograms = els.inputEl.value;
  createAnswersUl(kilograms);
})

function createAnswersUl(kg) {
  const ulEl = document.createElement('ul')
  els.divOutputEl.append(ulEl);

  const lb = kg * 2.2046;
  const liEl1 = document.createElement('li');
  liEl1.textContent = `${lb} lb`;
  ulEl.append(liEl1);

  const g = kg / 0.0010000;
  const liEl2 = document.createElement('li');
  liEl2.textContent = `${g} g`;
  ulEl.append(liEl2);

  const oz = kg * 35.274;
  const liEl3 = document.createElement('li');
  liEl3.textContent = `${oz} oz`;
  ulEl.append(liEl3);

}