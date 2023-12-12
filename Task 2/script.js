/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */


const els = {
  btnClick: document.getElementById('btn__element'),
  btnState: document.getElementById('btn__state'),
}

els.btnClick.addEventListener('click', countClicks);

let count = 0;
function countClicks() {
 count += 1;
 els.btnState.textContent = count;
}