import React from 'react';


const Book = ({book: {volumeInfo: {title, authors, imageLinks: {thumbnail}}}}) => {
  return (
   <div>
     {/* Code below displays the book title */}
     <h2>{title}</h2>
     {authors.map(author => <p>{author}</p>)}
     <img src = {thumbnail}/>
     {
       /*
       Add other JSX elements that will return:
       -Author Name
       -Thumbnail Image
       -Book Price 
       */
     }
   </div>
  );
}

export default Book;
