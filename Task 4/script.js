/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

const els = {
  divOutputEl: document.getElementById('output'),
}

async function getCars () {
  try {
    const resp = await fetch(ENDPOINT);
    const data = await resp.json();
    return data;
  } catch (error) {
    console.warn('getCars klaida', error);
    return false;
  }
}  

(async function createCards() {
  const carsArr = await getCars();
  carsArr.forEach(obj => {
    const card = document.createElement('div');
    card.classList.add('card');
    const h2 =  document.createElement('h2');
    h2.textContent = obj.brand;
    const modelsList = document.createElement('ul'); 
    card.append(modelsList);
    obj.models.forEach(model => {
      const modelItem = document.createElement('li'); 
      modelItem.textContent = model;
      modelsList.append(modelItem);
      els.divOutputEl.append(card);
      card.append(h2);
      card.append(modelsList);
    });
  });
})();
