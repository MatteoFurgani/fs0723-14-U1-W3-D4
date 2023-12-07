// creo il tabellone della tombola

const creaTabellone = function () {
  //  richiamo il div con un 'id'
  const tombolaDiv = document.getElementById("tabellone");
  for (let i = 0; i < 90; i++) {
    // creo le caselle con i numeri da 1 a 90
    const casellaNumeri = document.createElement("div");
    // creo ed attribuisco una classe per il css
    casellaNumeri.classList.add("number");

    const valoreCasella = document.createElement("h3");

    valoreCasella.innerText = i + 1;
    // appendo la casella nel div creato e nel div in html
    casellaNumeri.appendChild(valoreCasella);
    tombolaDiv.appendChild(casellaNumeri);
  }
};
creaTabellone();
const creaNumeri = function () {
  const numeri = Math.floor(Math.random() * 90) + 1;
  const numeroEstratto = document.createElement("p");
  numeroEstratto.innerHTML = "Il numestratto è..."`&{numeri}&`;
  document.getElementById("pulsante").appendChild(numeroEstratto);
};
