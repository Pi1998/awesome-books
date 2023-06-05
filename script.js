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
