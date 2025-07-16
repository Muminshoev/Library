const myLibrary = [];


function Book(title, author, pages, finished) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.finished = finished;
};


function addBookToLibrary() {
    const bookTitle = document.getElementById('title').value;
    const bookAuthor = document.getElementById('author').value;
    const bookPages = document.getElementById('pages').value;
    const didRead = document.getElementById('read').checked;
    const form = document.getElementById('form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const book1 = new Book (bookTitle, bookAuthor, bookPages, didRead);

        myLibrary.push(book1);
        console.log(myLibrary);
        form.reset()
    })

    
};

addBookToLibrary();