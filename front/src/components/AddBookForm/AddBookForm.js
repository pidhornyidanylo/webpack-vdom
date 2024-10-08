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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataForRequest = new FormData();
        formDataForRequest.append("title", formData.title);
        formDataForRequest.append("author", formData.author);
        formDataForRequest.append("price", formData.price);
        formDataForRequest.append("cover", formData.cover);
        const response = await fetch("http://localhost:8081/bookstore", { 
            method: "POST", 
            body: formDataForRequest
        })
        if(response.ok) {
            console.log("Successfully added book to the store");
            store.forcedFetchBooks();
        } else {
            console.log("Some error occured")
        }
    };

    return (
        <form className="add-form" onsubmit={handleSubmit}>
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
