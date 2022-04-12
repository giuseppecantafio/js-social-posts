// raccolgo tutto il mio codice all'interno di una self invoking per evitare di entrare nello scope globale
(function mySocialMedia() {

// creo costante contenente l'array di oggetti di cui ho bisogno

const posts = [
    {
        id: 1,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/300?image=171",
        author: {
            name: "Phil Mangione",
            image: "https://unsplash.it/300/300?image=15"
        },
        likes: 80,
        created: "2021-06-25"
    },
    {
        id: 2,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=112",
        author: {
            name: "Sofia Perlari",
            image: "https://unsplash.it/300/300?image=10"
        },
        likes: 120,
        created: "2021-09-03"
    },
    {
        id: 3,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=234",
        author: {
            name: "Chiara Passaro",
            image: "https://unsplash.it/300/300?image=20"
        },
        likes: 78,
        created: "2021-05-15"
    },
    {
        id: 4,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=24",
        author: {
            name: "Luca Formicola",
            image: null
        },
        likes: 56,
        created: "2021-04-03"
    },
    {
        id: 5,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=534",
        author: {
            name: "Alessandro Sainato",
            image: "https://unsplash.it/300/300?image=29"
        },
        likes: 95,
        created: "2021-03-05"
    }
];

// mi creo ora una funzione per stampare la griglia dei post
const containerElm = document.getElementById('container');

function stampaPost(){
posts.forEach((element)=>{
    let postElm = document.createElement('div');
    postElm.classList.add('post')
    postElm.innerHTML = `
    <div class="post__header">
    <div class="post-meta">                    
        <div class="post-meta__icon">
            <img class="profile-pic" src="${element.author.image}" alt="Phil Mangione">                    
        </div>
        <div class="post-meta__data">
            <div class="post-meta__author">${element.author.name}</div>
            <div class="post-meta__time">${element.created}</div>
        </div>                    
    </div>
</div>
<div class="post__text">${element.content}</div>
<div class="post__image">
    <img src="${element.media}" alt="">
</div>
<div class="post__footer">
    <div class="likes js-likes">
        <div class="likes__cta">
            <a class="like-button  js-like-button" href="#" data-postid="${element.id}">
                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                <span class="like-button__label">Mi Piace</span>
            </a>
        </div>
        <div class="likes__counter">
            Piace a <b id="like-counter-${element.id}" class="js-likes-counter">${element.likes}</b> persone
        </div>
    </div> 
</div>           
`
containerElm.append(postElm);
})
};
stampaPost(posts)

// vado a lavorare sul tasto mi piace e il counter like

let likeUp = document.getElementsByClassName('like-button');
const clickUp = Array.from(likeUp).forEach((a)=> a.addEventListener('click', onClick));
function onClick(clickUp){

    this.style.color = 'purple';
    console.log(this)

    let postId = this.querySelector('a[href]');
    
    console.log(postId);
    let likeCounterId = document.getElementById(`like-counter-${posts[0].id}`);
    console.log(likeCounterId)

    console.log(clickUp);
};

})();

// let likeCounterId = [];
//     posts.forEach((i)=> {
//         let likeCounterId = document.getElementById(`like-counter-${i.id}`);
//         console.log(i.id);
//         return likeCounterId;
//     });