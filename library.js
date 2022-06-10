// const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, "No");
// console.log(book1.getInfo());

let myLibrary = [];

function Book(title, author, numPages, haveRead){
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.haveRead = haveRead;
}

Book.prototype.getInfoRead = function() {
    let haveReadString;
    (this.haveRead.toLowerCase() === "yes") ? haveReadString = "read" : haveReadString = "not read yet";
    return this.title + " by " + this.author + ", " + this.numPages + " pages, " + haveReadString;
}

Book.prototype.getInfo = function() {
    return this.title + " by " + this.author + ", " + this.numPages + " pages";
}

// DOM
document.getElementById("bookForm").addEventListener("submit", addBookToLibrary);
// document.getElementById("addButton").addEventListener("click", addBookToLibraryPrompt);
// document.getElementById("logButton").addEventListener("click", logBooks);

function addBookToLibraryPrompt(){
    const title = window.prompt("Enter Title");
    const author = window.prompt("Enter Author");
    const numPages = window.prompt("Enter Number of Pages");
    const haveRead = window.prompt("Have you read this book yet? (yes or no)");
    myLibrary.push(new Book(title, author, numPages, haveRead));
}

function addBookToLibrary(e){
    e.preventDefault();
    
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const numPages = document.getElementById("numPages").value;
    const newBook = new Book(title, author, numPages, "no");
    myLibrary.push(newBook);
    
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = newBook.getInfo();
    document.getElementById("bookList").appendChild(li);
}

function logBooks(){
    for(let book of myLibrary){
        console.log(book.getInfo());
    }
}


