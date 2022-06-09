let myLibrary = [];

function Book(title, author, numPages, haveRead){
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.haveRead = haveRead;
}

Book.prototype.getInfo = function() {
    let haveReadString;
    (this.haveRead.toLowerCase() === "yes") ? haveReadString = "read" : haveReadString = "not read yet";
    return this.title + " by " + this.author + ", " + this.numPages + " pages, " + haveReadString;
}

// const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, "No");
// console.log(book1.getInfo());

function addBookToLibrary(){
    let title = window.prompt("Enter Title");
    let author = window.prompt("Enter Author");
    let numPages = window.prompt("Enter Number of Pages");
    let haveRead = window.prompt("Have you read this book yet? (yes or no)");
    myLibrary.push(new Book(title, author, numPages, haveRead));
}

function logBooks(){
    for(let book of myLibrary){
        console.log(book.getInfo());
    }
}

// DOM
document.getElementById("addButton").addEventListener("click", addBookToLibrary);
document.getElementById("logButton").addEventListener("click", logBooks);
