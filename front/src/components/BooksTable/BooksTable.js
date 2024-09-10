import { createVNode } from "../../vdom";
import BookItem from "../BookItem/BookItem";
import "./BooksTable.css";

const BooksTable = ({ books }) => {
  return (
    <ul className="booksList">
      {books.map((book, index) => <BookItem book={book} index={index} />)}
    </ul>
  );
};

export default BooksTable;

