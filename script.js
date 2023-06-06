/* eslint-disable no-unused-vars */
class AwesomeBooks {
  constructor() {
    this.books = [];
    this.loadBooks();
  }

  // Check stored books in localStorage
  loadBooks() {
    const storedBooks = localStorage.getItem('books');
    if (storedBooks) {
      // If true, parse the JSON string into an array
      this.books = JSON.parse(storedBooks);
    }
  }
}
// Retrieve books from localStorage
let books = [];

// Check stored books in localStorage
const storedBooks = localStorage.getItem('books');
if (storedBooks) {
  // If true, parse the JSON string into an array
  books = JSON.parse(storedBooks);
}

// display books in the collection
function displayBooks() {
  const booksList = document.getElementById('books-list');
  booksList.classList.add('table');
  booksList.innerHTML = '';
  books.forEach((book, index) => {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('table-row');
    bookDiv.innerHTML = `<div class="table-cell">"${book.title}" by ${book.author}</div>
                          <div class="table-cell">
                            <button class="button-cell" onclick="removeBook(${index})">Remove</button>
                          </div>
                        `;
    booksList.appendChild(bookDiv);
  });
}

// add a new book to the collection
function addBook(event) {
  event.preventDefault();

  const titleInput = document.getElementById('title-input');
  const authorInput = document.getElementById('author-input');
  const newBook = {
    title: titleInput.value,
    author: authorInput.value,
  };

  books.push(newBook);
  localStorage.setItem('books', JSON.stringify(books));

  displayBooks();

  // Reset input fields
  titleInput.value = '';
  authorInput.value = '';
}

//  remove a book from the collection
function removeBook(index) {
  books = books.filter((book, bookIndex) => bookIndex !== index);
  localStorage.setItem('books', JSON.stringify(books));

  displayBooks();
}

// Event listener for form submission
const addBookForm = document.getElementById('add-new-book');
addBookForm.addEventListener('submit', addBook);

// Display initial books in the collection
displayBooks();
