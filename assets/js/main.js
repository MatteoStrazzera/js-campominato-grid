// console.log('connesso');

// creare delle variabili in js
// una variabile per il numero di celle che serviranno

const numberOfCell = 100;

// console.log(numberOfCell);

// una variabile per il container in html

const gridContainer = document.querySelector('.container');

// console.log(gridContainer);

// una variabile per collegare il bottone e renderlo attivo per generare il gioco

const btn = document.getElementById('btn');

btn.addEventListener('click', function () {

    for (let i = 1; i <= numberOfCell; i++) {

        const numberInCell = i;
        // creazione delle singole celle 
        const cellNode = generateCell(numberInCell);
        // cambio colore celle al click
        eventOnCell(cellNode);
        // inserimento celle nel container
        gridContainer.insertAdjacentElement('beforeend', cellNode);

    }

})


/**
 * funzione per generare un evento al click sulle singole celle
 * @param {*} node 
 */
function eventOnCell(node) {

    node.addEventListener('click', function () {

        node.classList.toggle('bg_active-cell');
        console.log(node.innerText);
    })
}

/**
 * funzione per generare il nodo della cella tot n° di volte
 * @param {number} numb 
 * @returns 
 */
function generateCell(numb) {

    const cellNode = document.createElement('div');

    cellNode.classList.add('cell');

    cellNode.innerText = numb;

    return cellNode;
}






