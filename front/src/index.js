import {
    createVNode,
    patch
} from "./vdom.js";
import AddBookForm from "./components/AddBookForm/AddBookForm.js";
import BooksTable from "./components/BooksTable/BooksTable.js";
import "./style.css";

const createVApp = store => {
  const books = store?.state?.books ?? [];
  
    return (
      <div {...{ className: "container" }}>
        <AddBookForm />
        <BooksTable books={books} />
      </div>
    );
  };
  
  export const store = {
    state: { books: [] },
    onStateChanged: () => {},
    setState(nextState) {
      this.state = nextState;
      this.onStateChanged();
    },
    initialFetchBooks() {
      if (this.state.books.length === 0) {
        fetch("http://localhost:8081/bookstore")
          .then(res => res.json())
          .then(data => {
            this.setState({ books: data });
          })
          .catch(err => {
            console.error("Error fetching books:", err);
          });
      }
    },
    forcedFetchBooks() {
      let count = 0;
      if(count === 0) {
        fetch("http://localhost:8081/bookstore")
        .then(res => res.json())
        .then(data => {
          this.setState({ books: data });
          count = 1;
        })
        .catch(err => {
          console.error("Error fetching books:", err);
        });
      }
    }
  };
  
  let app = patch(createVApp(store), document.getElementById("app"));
  
  store.onStateChanged = () => {
    app = patch(createVApp(store), app);
  };
  
  store.initialFetchBooks();