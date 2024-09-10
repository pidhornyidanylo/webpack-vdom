import { createVNode } from "../../vdom";
import deleteIcon from "../../assets/delete.svg";
import { store } from "../../index.js"
import "./BookItem.css";

const BookItem = ({ book }) => {
  const handleBookDelete = async () => {
    const response = await fetch("http://localhost:8081/bookstore", {
      method: "DELETE", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: book.id
      })
    })
    if(response.ok) {
      console.log("Successfully deleted");
      store.forcedFetchBooks();
    } else {
      console.log("Error deleting")
    }
  }
  return (
    <li className="bookItem" key={book.id}>
        <img width={95} height={130} src={`http://localhost:8081/${book.cover}`} alt="cover" />
        <div className="bookInfo">
            <p>Title: {book.title}</p>
            <p>Author: {book.author}</p>
            <p className="price">Price: {book.price} $</p>
        </div>
        <div className="deleteButton" onclick={handleBookDelete}> 
          <img src={deleteIcon} width={20} height={20} alt="" />
        </div>
    </li>
  )
}

export default BookItem
