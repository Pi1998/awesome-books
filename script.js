/* eslint-disable no-unused-vars */
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
    bookDiv.innerHTML = `<div>${book.title}</div>
                        <div>${book.author}</div>
                         <button onclick="removeBook(${index})">Remove</button>
                         <hr>`;
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
