import { createVNode } from "../../vdom";
import BookItem from "../BookItem/BookItem";
import "./BooksTable.css";

const BooksTable = ({ books }) => {
  return (
    <ul className="booksList">
      {books.map(book => <BookItem book={book} />)}
    </ul>
  );
};

export default BooksTable;

