//This function load your books from your backend into the FrontEnd. It must do another GEt request. 

async function loadBooks(){ //code inside this function that will return a promise (at least one promise)
    const URL = "http://localhost:8080/api/books";
    try{
    const response = await fetch(URL); //requests to server, must have async, promise is created by fetch API, by default, fetch does get request 
    const responseBooks = await response.json(); //await pauses until x has completed, "blocking"
    for (let book of responseBooks){
        //catch > when you have a promise, some sort of function or API that creates it for you ex: fetch. 
        //then (input, => function); async await is another way to use do other than fetch and then 
        //try catch > 
        const tempCard = `<div class="col-4">
            <div class="card">
                <div class="card-body">
                <h5 class="card-title">${book.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${book.isbn}</h6>
                <div>Author: ${book.author}</div> 
                <div>Format: ${book.format}</div>
                <hr>
                </div>
            </div>
        </div>`
        document.getElementById('books').innerHTML = document.getElementById('books').innerHTML + tempCard;
    }
}
catch(error){
    console.log("error")
}
}

// const deleteBook = (isbn) => {
//     //const element = document.querySelector('#editForm')
//    fetch(`http://localhost:8080/api/books/${isbn}`, { method: 'DELETE' })
//    // .then(() => element.innerHTML='');

//    // Reloading the page
//    .then(location.reload());
// }

async function loadBooks(){
    //isbn > globally unique ID for a book
    const URL = "http://localhost:8080/api/books"; //send real isbn and get that from my books on the page 
    //const response = await fetch(URL, {method:'delete'}); //different routes in index.js
    // const responseBooks = await response.json();
    // for (let book of responseBooks){
    //     const tempCard = `<div class="col-4">
    //         <div class="card">
    //             <div class="card-body">
    //             <h5 class="card-title">${book.title}</h5>
    //             <h6 class="card-subtitle mb-2 text-muted">${book.isbn}</h6>
    //             <div>Author: ${book.author}</div> 
    //             <div>Format: ${book.format}</div>
    //             <hr>
    //             </div>
    //         </div>
    //     </div>`
    //    document.getElementById('123').innerHTML = document.getElementById('books').innerHTML + tempCard;
    }


loadBooks();

async function showBooks() {
    console.log("Hello World")
    const URL = "http://127.0.0.1:8080/api/books"
    const response = await fetch(URL);
    console.log("getting data: ", response);
    const responseBooks = await response.json();
    console.log("list of books: ", responseBooks);
    for (let book of responseBooks) {
        const tempCard = `<div class="col-4">
    <div class="card">
        <div class="card-body">
        <h5 class="card-title">${book.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${book.isbn}</h6>
        <div>Author: ${book.author}</div> 
        <div>Format: ${book.format}</div>
        <hr>
            <button type="button" class="btn btn-danger" onClick="deleteBook('${book.isbn}')">Delete</button>
            <button types="button" class="btn btn-primary" data-toggle="modal"  data-target="#editBookModal" onClick="editBook('${book.isbn}')">
            Edit
            </button>
        </div>
    </div>
</div>`
        document.getElementById('books').innerHTML = document.getElementById('books').innerHTML + tempCard;
    }
}
//every time you want to edit or delete, you need the ISBN, put unique idetifier in URL 
//delete one element in the array of the JSON file
async function deleteBook(isbn) {
    console.log(isbn)
    const URL = "http://127.0.0.1:8080/api/books"
    const response = await fetch(URL + "/" + isbn, { method: 'DELETE' });
    // console.log(response)
    location.reload()
}

document.getElementById

showBooks();
/*
async function deleteBook(isbn) {
    // console.log(isbn)
    const URL = "http://127.0.0.1:8080/api/books"
    const response = await fetch(URL + "/" + isbn, { method: 'DELETE' });
    // console.log(response)
    location.reload()

}

// User editing a book record. create a form with same info so user can edit

async function editBook(isbn) {
    const URL = "http://127.0.0.1:8080/api/books"
    const response = await fetch(URL + "/" + isbn, { method: 'GET' });
    const book = await response.json();
    console.log(book)
    const {
        author,
        format,
        title
    } = book;

    // Filling information about the book in the form inside the modal
    document.getElementById('isbn').value = isbn;
    document.getElementById('title').value = title;
    document.getElementById('author').value = author;
    document.getElementById('format').value = format;

    // Setting up the action url for the book //default behavior to whateverr I a posting to which is action
    document.getElementById('editForm').action = `http://localhost:8080/api/books/${isbn}`

    //  two ways :
    // 1. Delete button use method post on submit button to model

}
async function addButton(event) {
    event.preventDefault();
    console.log('submitted add button');
    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());
    //console.log({ value });
    const URL = "http://127.0.0.1:8080/api/books"
    const response = await fetch(event.target.action, {
        method: 'POST', body: JSON.stringify(value), headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });
    const respData = await response.text()
    console.log(respData)
    location.reload()
}

async function sendEdit(event) {
    event.preventDefault();
    console.log('submitted');
    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());
    //console.log({ value });
    const URL = "http://127.0.0.1:8080/api/books"
    const response = await fetch(event.target.action, {
        method: 'POST', body: JSON.stringify(value), headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });
    const respData = await response.text()
    console.log(respData)
    location.reload()
}
*/