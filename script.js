function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
};

const myLibrary = [];

function addBookToLibrary(title, author, pages, isRead ) {
  const newBook = new Book(title, author, pages, isRead);
  myLibrary.push(newBook);
  displayBooks();
}

function displayBooks() {
  const tableBody = document.getElementById("library-body");
  tableBody.innerHTML = "";

  myLibrary.forEach((book, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.pages}</td>
    <td>${book.isRead ? "Read" : "Not Read"}</td>
    <td>
       <button onclick="toggleReadStatus(${index})">Toggle Read</button>
       <button onclick="removeBook(${index})">Delete</button>
    </td>
    `;

    tableBody.appendChild(row);
  })
}

function toggleReadStatus(index) {
  myLibrary[index].isRead = !myLibrary[index].isRead;
  displayBooks();
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  displayBooks();
}


document.getElementById("book-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form from refreshing the page
  
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const isRead = document.getElementById("isRead").checked;

  addBookToLibrary(title, author, pages, isRead);

  document.getElementById("book-form").reset(); // Clear form
  document.getElementById("book-dialog").close(); // Close the dialog
});

document.getElementById("new-book-btn").addEventListener("click", function() {
  document.getElementById("book-dialog").showModal();
});

document.getElementById("close-dialog").addEventListener("click", function() {
  document.getElementById("book-dialog").close();
});

addBookToLibrary("Is it worth it", "V.X Xavier", 310, true);
addBookToLibrary("The Mind", "George Vianney", 328, false);

displayBooks();
