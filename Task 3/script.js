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

//getUsers()

els.btnEl.addEventListener('click', refresh)

function createUserCard(user) {
  const userCard = document.createElement('div');
  userCard.setAttribute('class', 'user-card');
  
  const p = document.createElement('p');
  p.setAttribute('class', 'card-p')
  p.textContent = user.login;

  const img = document.createElement('img');
  img.setAttribute('src', user.avatar_url);

  userCard.append(p);
  userCard.append(img);
  return userCard;
}

async function refresh() {
  els.messageEl.textContent = '';
  const users = await getUsers();
  
  users.map(e => createUserCard(e))
    .forEach(e => {
      els.divEl.append(e)
    });;
}