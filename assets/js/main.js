// console.log('connesso');

// creare delle variabili in js
// una variabile per il numero di celle che serviranno

const numberOfCell = 100;

// console.log(numberOfCell);

// una variabile per il container in html

const gridContainer = document.querySelector('.container');

console.log(gridContainer);

// una variabile per collegare il bottone e renderlo attivo per generare il gioco

const btn = document.getElementById('btn');

btn.addEventListener('click', function () {

    for (let i = 1; i <= numberOfCell; i++) {

        const numberInCell = i;
        // creazione singola cella ed inserimento nel container
        const cellNode = document.createElement('div');

        cellNode.classList.add('cell');

        cellNode.textContent = numberInCell;
        // rendiamo le singole celle attive, quando si cliccano cambiano colore ed inviano il numero in console
        cellNode.addEventListener('click', function () {
            
            cellNode.classList.toggle('bg_active-cell');
            console.log(cellNode.innerText);
        })

        console.log(cellNode);

        gridContainer.insertAdjacentElement('beforeend', cellNode);

    }

})



// creare un ciclo (for) per generare il numero di celle con all'interno i numeri in progressione






