// console.log('connesso');

// creare delle variabili in js
// una variabile per collegare il bottone 

const btn = document.getElementById('btn');

console.log(btn);
// una variabile per il numero di celle che serviranno

const numberOfCell = 100;

console.log(numberOfCell);
// una variabile con il markup delle singole celle

const markupCell = `<div class="cell"></div>`;

console.log(markupCell);

// una variabile per il container in html

const gridContainer = document.querySelector('.container');

console.log(gridContainer);

// creare un ciclo (for) per generare il numero di celle

for (let i = 0; i < numberOfCell; i++) {
    
    gridContainer.insertAdjacentHTML('beforeend', markupCell);
}