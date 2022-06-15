console.log("Digital Library");
let library = [];
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

Book.prototype.read = function (read) {
    if (read === null) {
        return this.read = "Not Read";
    } else {
        return this.read = "READ";
    }
}

let addBook = document.querySelector(".sub");

addBook.addEventListener('click', () => {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#page").value;
    let read = document.querySelector("input[type='checkbox']:checked");
    if (title == "" || author === '' || pages === "") {
        return
    } else {
        let books = new Book(title, author, pages);
        books.read(read);
        library.push(books);
        console.log(library);
        createRack(library.length - 1, library);
        clearForm();
    }
});

function clearForm() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#page").value = "";
    document.querySelector("#read").value = "";
}
function createRack(rackSize, book) {
    let libraryRack = document.querySelector(".library-rack")
    while (libraryRack.hasChildNodes()) {
        libraryRack.removeChild(libraryRack.firstChild);
    }
    for (let i = 0; i <= rackSize; i++) {
        let divBook = document.createElement("div")
        divBook.classList = "books";
        divBook.classList.add("div"+i);
        libraryRack.appendChild(divBook);
        //title
        let title = document.createElement("h2");
        divBook.appendChild(title);
        title.textContent = book[i].title;
        // Author
        let author = document.createElement("h3");
        divBook.appendChild(author);
        author.textContent = book[i].author;
        //Pages
        let pages = document.createElement("h4");
        divBook.appendChild(pages);
        pages.textContent = book[i].pages + " Pages";
        //READ or Not
        let read = document.createElement("h5");
        read.setAttribute("data-read", i);
        divBook.appendChild(read);
        read.addEventListener('click', ()=>{
            if(read.textContent == "READ"){
                book[i].read = 'Not Read';
                read.style.color = 'red';
                read.textContent = book[i].read;
            }else if(read.textContent == 'Not Read'){
                book[i].read = "READ";
                read.style.color = "green";
                read.textContent = book[i].read;
            }
        })
        if (book[i].read == "READ") {
            read.style.color = "green";
        } else {
            read.style.color = 'red';
        }
        read.textContent = book[i].read;
        //button
        let closeBtn = document.createElement("button");
        closeBtn.classList = "close";
        closeBtn.textContent = "X";
        closeBtn.setAttribute("data-close", i);
        divBook.appendChild(closeBtn);
        closeBtn.addEventListener("click", () => {
            let book = document.querySelector(`.div${i}`);
            book.remove();
            library.splice(i,1);
        })
    }
}