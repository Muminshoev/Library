const myLibrary = [];


function Book(title, author, pages, finished) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.finished = finished;
};

const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const bookTitle = document.getElementById('title').value;
    const bookAuthor = document.getElementById('author').value;
    const bookPages = document.getElementById('pages').value;
    const didRead = document.getElementById('read').checked;


    const book1 = new Book(bookTitle, bookAuthor, bookPages, didRead);

    myLibrary.push(book1);

    form.reset();
    showOnPage();
});

function showOnPage() {
    const shelf = document.getElementById('shelf');
    shelf.innerHTML = '';
    myLibrary.forEach((element, index) => {    
    const shelfItem = document.createElement('li');
    shelfItem.className = 'shelf__item';
    shelfItem.dataset.index = index
    const title = document.createElement('p');
    title.className = 'title';
    const author = document.createElement('p');
    author.className = 'author';
    const pages = document.createElement('p');
    pages.className = 'pages'
    const read = document.createElement('p');
    read.className = 'read';
    const btn = document.createElement('button');
    btn.innerHTML = 'Remove';
    
    btn.addEventListener('click', (event) => {
        const itemRemove = event.target.closest('.shelf__item');
        if(itemRemove) {
            const indexRemove = parseInt(itemRemove.dataset.index);
            itemRemove.remove();
            myLibrary.splice(indexRemove, 1);

            showOnPage();
        }
    })

    title.innerHTML = "Book: " + element.title;
    author.innerHTML = "Author: " + element.author;
    pages.innerHTML = "Pages: " + element.pages;
    if(element.read === true) {
        read.innerHTML = 'finished'
    }else {
        read.innerHTML = 'not finished'
    }

    shelfItem.append(title, author, pages, read, btn);
    shelf.appendChild(shelfItem);
})
}

