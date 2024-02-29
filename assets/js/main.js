// console.log('connesso');

// creare delle variabili in js
// una variabile per il numero di celle che serviranno

const numberOfCell = 100;

// console.log(numberOfCell);

// una variabile per il container in html

const gridContainer = document.querySelector('.container');

// console.log(gridContainer);

// colleghiamo il form nella DOM e attiviamo un evento al submit

document.querySelector('form').addEventListener('submit', function (e) {

    // preveniamo il reload di form
    e.preventDefault();
    
    // blocchiamo la creazione di altri container al click di play
    gridContainer.innerHTML = '';

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






