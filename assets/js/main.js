// console.log('connesso');

// creare delle variabili in js
// una variabile per collegare il bottone 

const btn = document.getElementById('btn');

console.log(btn);
// una variabile per il numero di celle che serviranno

const numberOfCell = 100;

console.log(numberOfCell);
// una variabile con il markup delle singole celle

// const markupCell = `<div class="cell"></div>`;

// console.log(markupCell);

// una variabile per il container in html

const gridContainer = document.querySelector('.container');

console.log(gridContainer);

// creare un ciclo (for) per generare il numero di celle con all'interno i numeri in progressione

for (let i = 1; i <= numberOfCell; i++) {
    
    const numberInCell = i;
    const markupCell = `<div class="cell">${numberInCell}</div>`;
    gridContainer.insertAdjacentHTML('beforeend', markupCell);

    console.log(markupCell);
}

// attraverso .toggle() quando l'utente cliccherà su una casella quella si illuminerà e manderà un messaggio in console