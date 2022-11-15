import React, { useState } from 'react';
import Book from './components/Book';
import data from './models/books.json';

function App() {
  //const state = useState(data);
  //const books = state[0]
  const [books] = useState(data)
  console.log (books)
  return books.map(book => <Book key={book.id} book={book}/>);;
}

export default App;

