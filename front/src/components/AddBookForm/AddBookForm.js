import { createVNode } from "../../vdom";
import { store } from "../..";
import "./AddBookForm.css";

const AddBookForm = () => {
    let formData = {
        title: '',
        author: '',
        price: 0,
        cover: null
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (e.target.type === "file") {
            formData[id] = e.target.files[0];
        } else if (e.target.type === "number") {
            formData[id] = +value;
        } else {
            formData[id] = value; 
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { books } = store.state;
        store.setState({ ...store.state, books: [...books, { id: books.length + 1, ...formData }] });
    };

    return (
        <form class="add-form" onsubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title</label>
                <input id="title" type="text" oninput={handleInputChange} />
            </div>
            <div>
                <label htmlFor="author">Author</label>
                <input id="author" type="text" oninput={handleInputChange} />
            </div>
            <div>
                <label htmlFor="price">Price</label>
                <input id="price" type="number" oninput={handleInputChange} />
            </div>
            <div>
                <label htmlFor="cover">Cover</label>
                <input id="cover" type="file" oninput={handleInputChange} />
            </div>
            <button type="submit">Store Book</button>
        </form>
    );
};

export default AddBookForm;
