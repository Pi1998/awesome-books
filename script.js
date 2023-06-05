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