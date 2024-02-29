// console.log('connesso');

// creare delle variabili in js
// una variabile per collegare il bottone 

const btn = document.getElementById('btn');

// console.log(btn);
// una variabile per il numero di celle che serviranno

const numberOfCell = 100;

// console.log(numberOfCell);

// console.log(markupCell);

// una variabile per il container in html

const gridContainer = document.querySelector('.container');

console.log(gridContainer);

// creare un ciclo (for) per generare il numero di celle con all'interno i numeri in progressione

for (let i = 1; i <= numberOfCell; i++) {

    const numberInCell = i;
   
    const cellNode = document.createElement('div');

    cellNode.classList.add('cell');

    cellNode.textContent = numberInCell;

    console.log(cellNode);

    gridContainer.insertAdjacentElement('beforeend', cellNode);

}




