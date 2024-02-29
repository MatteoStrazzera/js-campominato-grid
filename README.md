# js-campominato-grid

## Exercise instructions

L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

- Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

## second exercise instructions

Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: i funghi magici.

Attenzione: nella stessa cella può essere posizionato al massimo un fungo, perciò nell’array dei funghi non potranno esserci due numeri uguali.

In seguito l'utente clicca su una cella: 

se il numero è presente nella lista dei numeri generati
- abbiamo calpestato una fungo
- la cella si colora di rosso e la partita termina.

Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

La partita termina quando il giocatore clicca su una fungo o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono funghi).

Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una fungo.

## Steps

- impostare la pagina html con header(dove andrà il bottone), main(dove andrà il contenitore della griglia) e il footer
- creare delle variabili in js:
    - una variabile per collegare il bottone e farlo funzionare(eventlistener())
    - una variabile per il numero di celle che serviranno
    - una variabile con il markup delle singole celle
- creare un ciclo (for) per generare il numero di celle
- attraverso .toggle() quando l'utente cliccherà su una casella quella si illuminerà e manderà un messaggio in console   


## Tools

- const / let
- getelementbyid / queryselector
- for
- eventlistener()
- markup
- toggle()
