const posts = [

    {
        "id": 1,
        "content": "Phil libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },

    {
        "id": 2,
        "content": "Sofia libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },

    {
        "id": 3,
        "content": "Chiara libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },

    {
        "id": 4,
        "content": "Luca libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },

    {
        "id": 5,
        "content": "Alessandro libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }

];



// --- inizio milestone_1, milestone_2, bonus_1, bonus_2

let firstLetters;

// richiamo il container
const containerDom = document.getElementById('container');

// attraverso un ciclo, creo i post con le variabili che cambiano
for (let x = 0; x < posts.length; x++) {
    
    // bonus_1: cambio la data prima che venga stampata nella pagina
    let newDateShort = posts[x].created.split('-').reverse().join('/');
    console.log(newDateShort); // debug
    posts[x].created = newDateShort;
    console.log(posts[x].created) // debug

    // entro nell'if per il bonus_2
    if (posts[x].author.image == null) {
     
        // segue tutto il bonus_2
        console.log(x, 'check_1'); // debug

        // sostituisco l'immagine 'null' con le iniziali del nome
        let authorNameNoImage = posts[x].author.name;
        console.log(posts[x].author.name, 'check_2'); // debug
        let firstLetters = authorNameNoImage.substring(0,1) + ' ' + authorNameNoImage.substring(5,6);
        console.log(firstLetters, 'check_3'); // debug
        posts[x].author.image = firstLetters;
        console.log(posts[x].author.image, 'check_4'); // debug

        // inserisco il contenuto con il codice html dell'immagine profilo cambiato
        containerDom.innerHTML += `<div class="post">
                                        <div class="post__header">
                                            <div class="post-meta">                    
                                                <div class="post-meta__icon">
                                                    <div class='profile-pic two_letters'>${posts[x].author.image}</div>
                                                </div>
                                                <div class="post-meta__data">
                                                    <div class="post-meta__author">${posts[x].author['name']}</div>
                                                    <div class="post-meta__time">${posts[x].created}</div>
                                                </div>                    
                                            </div>
                                        </div>
                                        <div class="post__text">${posts[x].content}</div>
                                        <div class="post__image">
                                            <img src="${posts[x]['media']}" alt="">
                                        </div>
                                        <div class="post__footer">
                                            <div class="likes js-likes">
                                                <div class="likes__cta">
                                                    <a class="like-button  js-like-button" href="#" data-postid="${posts[x].id}">
                                                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                                        <span class="like-button__label">Mi Piace</span>
                                                    </a>
                                                </div>
                                                <div class="likes__counter">
                                                    Piace a <b id="like-counter-${x}" class="js-likes-counter">${posts[x].likes}</b> persone
                                                </div>
                                            </div> 
                                        </div>            
                                    </div>`

    } else {

        // milestone_1 e m_2:
        containerDom.innerHTML += `<div class="post">
                                    <div class="post__header">
                                        <div class="post-meta">                    
                                            <div class="post-meta__icon">
                                                <img class="profile-pic" src="${posts[x].author.image}" alt="Phil Mangione">                    
                                            </div>
                                            <div class="post-meta__data">
                                                <div class="post-meta__author">${posts[x].author['name']}</div>
                                                <div class="post-meta__time">${posts[x].created}</div>
                                            </div>                    
                                        </div>
                                    </div>
                                    <div class="post__text">${posts[x].content}</div>
                                    <div class="post__image">
                                        <img src="${posts[x]['media']}" alt="">
                                    </div>
                                    <div class="post__footer">
                                        <div class="likes js-likes">
                                            <div class="likes__cta">
                                                <a class="like-button  js-like-button" href="#" data-postid="${posts[x].id}">
                                                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                                    <span class="like-button__label">Mi Piace</span>
                                                </a>
                                            </div>
                                            <div class="likes__counter">
                                                Piace a <b id="like-counter-${x}" class="js-likes-counter">${posts[x].likes}</b> persone
                                            </div>
                                        </div> 
                                    </div>            
                                </div>`

    }

}



// --- fine milestone_1 e m_2, inizio milestone_3 e bonus_3



const likeBtn = document.getElementsByClassName('like-button'); // richiamo il bottone 'mi piace', ottenendo un array
let likesIncrease; // variabile per incremento likes
const arrayIdPostLiked = [] // array vuoto da riempire con id dei post a cui è stato messo il 'mi piace'

let alreadyClicked = false; // bonus_3: variabile per controllare se ho già cliccato o meno

// tramite un ciclo scorro l'array dei bottoni 'mi piace' e ad ognugno aggiungo un evento al click
for (let y = 0; y < likeBtn.length; y++) {
        
    let idPostLiked = likeBtn[y].getAttribute('data-postid'); // variabile cui assegno il contenuto dell'attributo data-postid di 'likeBtn[y-esimo]' (quello cliccato)

    likeBtn[y].addEventListener('click', function(event) {

        if (alreadyClicked == false) {

            event.preventDefault(); // prevenire, al click, il funzionamento del tag <a>

            likeBtn[y].style.color = '#48cae4'; // cambio colore al 'mi piace' cliccato
            
            // incremento i like nell'html
            likesIncrease = posts[y].likes;
            likesIncrease += 1;
            document.getElementById(`like-counter-${y}`).innerHTML = likesIncrease;

            // pusho l'id del post nel nuovo array
            arrayIdPostLiked.push(idPostLiked);
            console.log(arrayIdPostLiked); // debug

            // cambio il booleano della variabile per non entrare più in questo if (avendo già cliccato)
            alreadyClicked = true;
            console.log(alreadyClicked)

        //
        } else if (alreadyClicked == true) {

            event.preventDefault(); // prevenire, al click, il funzionamento del tag <a>

            likeBtn[y].style.color = '#404040'; // cambio colore al 'mi piace' cliccato
            
            // decremento i like
            likesIncrease -= 1;
            document.getElementById(`like-counter-${y}`).innerHTML = likesIncrease;

            // cambio il booleano della variabile per non entrare più in questo if (avendo tolto il click)
            alreadyClicked = false;
            console.log(alreadyClicked); // debug

        }

    });

};



/*

// logica di trasformazione della data

// creo variabile cui assegno la data americana
let oldDate = posts[0].created;
console.log(oldDate);

// creo variabile cui assegno la data americana splittata (sarà un array)
let oldDateSplitted = oldDate.split('-');
console.log(oldDateSplitted);

// creo variabile cui assegno la data american splittata e con ordine invertito (è sempre un array)
let oldDateSplittedAndReversed = oldDateSplitted.reverse();
console.log(oldDateSplittedAndReversed);

// creo variabile cui assegno l'unione dei vari elementi dell'array, uniti ma separati da '/' (non è più un array)
let newDate = oldDateSplitted.join('/');
console.log(newDate);

// ---

// quanto fatto sopra, ma in un unico passaggio
let newDateShort = posts[0].created.split('-').reverse().join('/');
console.log(newDateShort);

*/