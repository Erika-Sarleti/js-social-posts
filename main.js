const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
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
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
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
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
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
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
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
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];
// VARIABILI


// Pubblicazione ogni post
for (id=0; id< posts.length; id++) {
    publish();
}
console.log(posts[0]['author'].name)

function publish(){
   const feed = document.querySelector('posts-list');
   let singlePost = document.createElement('div');
   singlePost.classList.add('post');
   feed.append(singlePost);

// ********** HEADER **********

   let header = document.createElement('div');
   header.classList.add('post__header');
   header.innerHTML = `
    <div class="post-meta">                    
        <div class="post-meta__icon">
            <img class="profile-pic" src="${posts[id].media}" alt="${posts[id]['author'].name}">                    
        </div>
        <div class="post-meta__data">
            <div class="post-meta__author">${posts[id]['author'].name}</div>
            <div class="post-meta__time">4 mesi fa</div>
        </div>                    
    </div>`;
    singlePost.append(header);
//  ********** CONTENT **********
    let text = document.createElement('div');
    text.classList.add('post__text');
    text.innerHTML = posts[id].content;
    singlePost.append(text);
//  ********** IMG **********
    let img = document.createElement('div');
    img.classList.add('post__image');
    img.innerHTML = posts[id].media;
    singlePost.append(img);

//  ********** FOOTER **********
    let footer = document.createElement('div');
    footer.classList.add('post__footer');
    footer.innerHTML = `
    <div class="likes js-likes">
        <div class="likes__cta">
            <a class="like-button  js-like-button" href="#" data-postid="1">
                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                <span class="like-button__label">Mi Piace</span>
            </a>
        </div>
        <div class="likes__counter">
            Piace a <b id="like-counter-1" class="js-likes-counter">${posts.likes}</b> persone
        </div>
    </div> `
    singlePost.append(footer);


}

