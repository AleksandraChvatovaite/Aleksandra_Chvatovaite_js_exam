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
  const userInput = els.inputEl.value;
  let outputContent;
  if (!isNaN(userInput)) {
    const userNumber = +userInput;
    outputContent = createAnswersUl(userNumber);
  } else {
    outputContent = document.createElement('h2');
    errEl.textContent = 'Please enter a valid weight';
  }
  
  reloadOutput(outputContent);
})

function reloadOutput(outputContent) {
  els.divOutputEl.innerHTML = '';
  els.divOutputEl.append(outputContent);
}

function createAnswersUl(kg) {
  const ulEl = document.createElement('ul')
  ulEl.setAttribute('id', 'answer-list');

  const lbs = (kg * 2.2046).toFixed(2);
  addlistItem(ulEl, lbs, "lbs");

  const g = kg / 0.0010000;
  addlistItem(ulEl, g, "g");

  const oz = (kg * 35.274).toFixed(2);
  addlistItem(ulEl, oz, "oz");

  return ulEl;
}

function addlistItem(list, result, units) {
  const li = document.createElement('li');
  li.textContent = `${result} ${units}`;
  list.append(li);
}