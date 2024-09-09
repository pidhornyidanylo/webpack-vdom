import { createVNode } from "../../vdom";
import "./BookItem.css";

const BookItem = ({ book }) => {
  return (
    <li className="bookItem" key={book.id}>
        <img width={95} height={130} src={`http://localhost:8081/${book.cover}`} alt="cover" />
        <div className="bookInfo">
            <p>Title: {book.title}</p>
            <p>Author: {book.author}</p>
            <p>Price: {book.price} $</p>
        </div>
    </li>
  )
}

export default BookItem
