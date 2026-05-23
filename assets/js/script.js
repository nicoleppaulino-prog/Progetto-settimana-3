

/* STATO
   In cima al file definisci poche variabili globali:
   - un array di oggetti come dato principale (es. libri, ricette, film, ...)
   - una variabile per il filtro corrente
   - una variabile per l'ordinamento corrente
   - una variabile per la stringa di ricerca corrente
*/
let books = [
  { id: 1, titolo: "La tregua",                      autore: "Primo Levi",   anno: 1926, stato: "da-leggere" },
  { id: 2, titolo: "Se questo e' un uomo",            autore: "Primo Levi",   anno: 1947, stato: "letto" },
  { id: 3, titolo: "1984",                            autore: "George Orwell",anno: 1949, stato: "da-leggere" },
  { id: 4, titolo: "Il giro del mondo in 80 giorni",  autore: "Jules Verne",  anno: 1872, stato: "letto" },
  { id: 5, titolo: "Ventimila leghe sotto i mari",    autore: "Jules Verne",  anno: 1870, stato: "letto" },
];

let filtroCorrente = 'tutti';
let ordinamentoCorrente = 'anno-asc';
let ricercaCorrente = '';


/* let books = [ ] → stai creando una scatola chiamata books che contiene una lista di libri. Le parentesi quadre [ ] significano lista:
*{ } → ogni libro è una scheda con le sue informazioni. Le parentesi graffe significano scheda:
/id: 1 → è il numero identificativo del libro. Ogni libro ha un numero diverso così puoi riconoscerlo. Lo scegli tu.
titolo: → il nome del libro. Lo scegli tu.
autore: → chi ha scritto il libro. Lo scegli tu.
anno: → l'anno di pubblicazione. Lo scegli tu.
stato: → se il libro è stato letto o no. Può essere solo "letto" o "da-leggere".
let filtroCorrente = 'tutti' → una scatola che ricorda quale filtro è attivo. Parte con 'tutti' perché all'inizio vuoi vedere tutti i libri. puo essere cambiato il nome non per forza corrente 
let ordinamentoCorrente = 'anno-asc' → una scatola che ricorda come sono ordinati i libri. anno-asc significa dal più vecchio al più nuovo.
let ricercaCorrente = '' → una scatola che ricorda cosa stai cercando. Parte vuota '' perché non hai ancora cercato nulla.ricerca → perché serve per cercare i libri. Quando scrivi qualcosa nella barra di ricerca, quella parola viene salvata qu */


/* RENDER()
   Una sola funzione che ridipinge la lista. A ogni chiamata:
   1) parte dall'array completo,
   2) filtra,
   3) ordina,
   4) svuota il container DOM,
   5) ricrea gli elementi DOM per gli oggetti risultanti.
   Aggiorna anche conteggi e statistiche.
   Salva lo stato in localStorage in fondo a render() (cerca tu come funziona).
 * RENDER */
function libri () {
  
  // 1) Prende il container dove mettere i libri
  const container = document.getElementById('bookList');
  
  // 2) Svuota il container
  container.innerHTML = '';
  
  // 3) Per ogni libro crea un elemento e lo mette nella pagina
  books.forEach(book => {
    const div = document.createElement('div');
    div.innerHTML = `
      <p>${book.titolo} — ${book.autore} — ${book.anno}</p>
    `;
    container.appendChild(div);
  });

}

// Chiama render() per la prima volta
libri();

/* SCRIVI QUI LA TUA RISPOSTA */


/* FORM CON VALIDAZIONE
   addEventListener("submit") sul form.
   event.preventDefault().
   Leggi i valori con .value.trim().
   Se uno dei campi obbligatori e' vuoto, mostra errore e return.
   Altrimenti push allo stato, form.reset(), render().
   Id univoco con Date.now().
*/
/* FORM CON VALIDAZIONE */
document.getElementById('btnAggiungi').addEventListener('click', function() {
  
  // 1) Legge i valori degli input
  const titolo = document.getElementById('inputTitolo').value.trim();
  const autore = document.getElementById('inputAutore').value.trim();
  const anno   = document.getElementById('inputAnno').value.trim();
  const stato  = document.getElementById('inputStato').value;

  // 2) Controlla che i campi non siano vuoti
  if (!titolo || !autore || !anno) {
    alert('Compila tutti i campi!');
    return;
  }

  // 3) Aggiunge il nuovo libro alla lista
  books.push({
    id: Date.now(),
    titolo: titolo,
    autore: autore,
    anno: anno,
    stato: stato
  });

  // 4) Aggiorna la pagina
  libri();

  // 5) Svuota i campi
  document.getElementById('inputTitolo').value = '';
  document.getElementById('inputAutore').value = '';
  document.getElementById('inputAnno').value   = '';
  document.getElementById('inputStato').value  = 'da-leggere';

});

/* SCRIVI QUI LA TUA RISPOSTA */


/* INTERAZIONI BASE — eliminare, modificare, contare
   - Elimina: filter per id, render(). Event delegation sul container.
   - Modifica in-place: button "Modifica". Al click il testo diventa <input>,
     si conferma con Invio o blur.
   - Conteggi dinamici dentro render().
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* RICERCA, FILTRO, ORDINAMENTO
   - Ricerca live: <input> con event "input". Salva in stato e render().
   - Filtro: <select> con event "change". Salva in stato e render().
   - Ordinamento: due button (o select). Salva in stato e render().
   I tre si compongono dentro render() in fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* NOTIFICHE TEMPORANEE
   Funzione notifica(testo) che imposta il testo del <div id="notifica">,
   lo mostra (display: block), poi dopo 3000ms (setTimeout) lo nasconde.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* TEMA CHIARO/SCURO
   Un button che chiama document.body.classList.toggle("dark").
   In CSS scrivi le regole opposte (es. body.dark { background: #111; ... }).
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* PERSISTENZA — localStorage (cerca tu su MDN)
   - In fondo a render(), salva lo stato:
       localStorage.setItem("dati", JSON.stringify(stato));
   - All'avvio, prima della prima render(), carica:
       const salvato = localStorage.getItem("dati");
       if (salvato) stato = JSON.parse(salvato);
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* RIORDINO ↑ ↓
   Due button su ogni elemento. Click su ↑ scambia con il precedente nell'array,
... (40 righe a disposizione) */