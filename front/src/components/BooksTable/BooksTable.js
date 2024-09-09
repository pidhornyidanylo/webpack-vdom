import { createVNode } from "../../vdom";
import "./BooksTable.css";

const BooksTable = ({ books }) => {
  return (
    <ul class="booksList">
      {books.map(book => (
        <li class="bookItem" key={book.id}>
          <img width={95} height={120} src="https://upload.wikimedia.org/wikipedia/commons/a/ab/JoyceUlysses2.jpg" alt="cover" />
          <div class="bookInfo">
            <p>Title: {book.title}</p>
            <p>Author: {book.author}</p>
            <p>Price: {book.price} $</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default BooksTable;

