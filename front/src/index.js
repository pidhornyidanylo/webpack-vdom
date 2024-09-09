import {
    createVNode,
    patch
} from "./vdom.js";
import AddBookForm from "./components/AddBookForm/AddBookForm.js";
import BooksTable from "./components/BooksTable/BooksTable.js";
import "./style.css";

const createVApp = store => {
  const books = store?.state?.books ?? [];
  console.log(books);
    return (
      <div {...{ class: "container" }}>
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
    }
  };
  
  let app = patch(createVApp(store), document.getElementById("app"));
  
  store.onStateChanged = () => {
    app = patch(createVApp(store), app);
  };