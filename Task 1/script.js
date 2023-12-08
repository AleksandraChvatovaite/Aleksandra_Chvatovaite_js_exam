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
  const lb = kilograms * 2.2046;
  const g = kilograms / 0.0010000;
  const oz = kg * 35.274;
  els.divOutputEl.append()
})

