/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama div elemente su id "output".
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

const els = {
 divEl: document.getElementById('output'),
 btnEl: document.getElementById('btn'),
 messageEl: document.getElementById('message'),
};

els.btnEl.addEventListener('click', refresh);

async function refresh() {
  els.messageEl.textContent = '';
  const users = await getUsers();
  
  users.map(e => createUserCard(e))
    .forEach(e => {
      els.divEl.append(e)
    });;
}

async function getUsers () {
  try {
    const resp = await fetch(ENDPOINT);
    const data = await resp.json();
    return data;
  } catch (error) {
    console.warn('getUsers klaida', error);
    return false;
  }
}

function createUserCard(user) {
  const userCard = createElement('div', { class: 'user-card' });

  const p = createElement('p', { class: 'card-p' }, user.login);

  const img = createElement('img', { src: user.avatar_url });

  userCard.append(p);
  userCard.append(img);
  return userCard;
}

function createElement(element, attributesObj, textContent) {
  const result = document.createElement(element);

  for (const key in attributesObj) {
    result.setAttribute(key, attributesObj[key]);
  }

  if (textContent) {
    result.textContent = textContent;
  }

  return result;
}