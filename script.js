let myLibrary = [];





let addNewBook = (ev) => {
    ev.preventDefault();
    let books  = {
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
        pages: document.getElementById('pages').value,
    };
    myLibrary.push(books);
    document.querySelector('.form').reset();
    localStorage.setItem('MyLibrary', JSON.stringify(myLibrary) );
    

};

document.addEventListener('DOMContentLoaded', () =>{
    document.getElementById('btn').addEventListener('click', addNewBook)
});