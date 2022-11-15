import React from 'react';


const Book = (props) => {
  return (
   <div>
     {/* Code below displays the book title */}
     <h2>{props.book.volumeInfo.title}</h2>
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
