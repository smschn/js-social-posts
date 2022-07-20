esercizio di oggi: Social Posts<br>
nome repo: js-social-posts

--

Descrizione:

Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:

--

Milestone 1:<br>

Creiamo il nostro array di oggetti che rappresentano ciascun post.<br>
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
- id del post, numero progressivo da 1 a n
- nome autore,
- foto autore,
- data in formato americano (mm-gg-yyyy),
- testo del post,
- immagine (non tutti i post devono avere una immagine),
- numero di likes.

--

Milestone 2:<br>

Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.

--

Milestone 3:<br>

Se clicchiamo sul tasto “Mi Piace” cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.<br>
Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.

--

**BONUS**<br>

1. Formattare le date in formato italiano (gg/mm/aaaa)
2. Gestire l’assenza dell’immagine profilo con un elemento di fallback che contiene le iniziali dell’utente (es. Luca Formicola > LF).
3. Al click su un pulsante “Mi Piace” di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.

--

Consigli del giorno:

Ragioniamo come sempre a step.<br>
Prima scriviamo nei commenti la logica in italiano e poi traduciamo in codice.<br>
console.log() è nostro amico.<br>
Quando un pezzo di codice funziona, chiediamoci se possiamo scomporlo in funzioni più piccole.
