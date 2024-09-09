import { createVNode } from "../../vdom";
import "./BooksTable.css";

const BooksTable = ({ books }) => {
  console.log(books);
  return (
    <div>
      <table class="books-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Price</th>
            <th>Cover</th>
          </tr>
        </thead>
        <tbody>
          {books.length > 0 ? (
            books.map((book) => (
              <tr>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.price}</td>
                <td>
                  {book.cover ? (
                    <img
                      src={URL.createObjectURL(book.cover)}
                      alt={book.title}
                      class="book-cover"
                    />
                  ) : (
                    "No Cover"
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No books available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BooksTable;
