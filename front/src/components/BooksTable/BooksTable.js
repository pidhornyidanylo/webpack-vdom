import { createVNode } from "../../vdom";
import "./BooksTable.css";

const BooksTable = ({ books }) => {
  console.log(books);
  return (
    <ul>
      {books.map(book => (
        <li key={book.title}>
          <div class="bookInfo">
            <p>Title: {book.title}</p>
            <p>Author: {book.author}</p>
            <p>Price: {book.price}$</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default BooksTable;
