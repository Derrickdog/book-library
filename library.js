// Display books with DOM
function Book(title, author, numPages, haveRead){
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.haveRead = haveRead;
}

Book.prototype.getInfo = function() {
    return this.title + " by " + this.author + ", " + this.numPages + " pages ";
}

document.getElementById("bookForm").addEventListener("submit", addBookToLibrary);
document.getElementById("bookList").addEventListener("click", removeBook);
document.getElementById("bookList").addEventListener("click", toggleRead);

function addBookToLibrary(e){
    e.preventDefault();

    //new book
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const numPages = document.getElementById("numPages").value;
    const haveRead = document.getElementById("haveRead").checked;
    const newBook = new Book(title, author, numPages, haveRead);
    
    //create li
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = newBook.getInfo();

    //create read badge
    const badge = document.createElement("span");
    if(haveRead){
        badge.className = "badge bg-success readBtn";
        badge.textContent = "Read";
    }
    else{
        badge.className = "badge bg-secondary readBtn";
        badge.textContent = "Not Read";
    }

    //create delete button
    const deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-danger btn-sm float-end deleteBtn";
    deleteButton.textContent = "X";

    //add items
    li.appendChild(badge);
    li.appendChild(deleteButton);
    document.getElementById("bookList").appendChild(li);
}

function removeBook(e){
    if(e.target.classList.contains("deleteBtn")){
        const li = e.target.parentElement;
        document.getElementById("bookList").removeChild(li);
    }
}

function toggleRead(e){
    if(e.target.classList.contains("readBtn")){
        const badge = e.target;
        if(badge.textContent === "Not Read"){
            badge.className = "badge bg-success readBtn";
            badge.textContent = "Read";
        }
        else{
            badge.className = "badge bg-secondary readBtn";
            badge.textContent = "Not Read";
        }
    }
}

/*
// Log books with prompt
let myLibrary = [];

Book.prototype.getInfoRead = function() {
    let haveReadString;
    (this.haveRead.toLowerCase() === "yes") ? haveReadString = "read" : haveReadString = "not read yet";
    return this.title + " by " + this.author + ", " + this.numPages + " pages, " + haveReadString;
}

// document.getElementById("addButton").addEventListener("click", addBookToLibraryPrompt);
// document.getElementById("logButton").addEventListener("click", logBooks);

function addBookToLibraryPrompt(){
    const title = window.prompt("Enter Title");
    const author = window.prompt("Enter Author");
    const numPages = window.prompt("Enter Number of Pages");
    const haveRead = window.prompt("Have you read this book yet? (yes or no)");
    myLibrary.push(new Book(title, author, numPages, haveRead));
}

function logBooks(){
    for(let book of myLibrary){
        console.log(book.getInfo());
    }
}

// const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, "No");
// console.log(book1.getInfo());
*/