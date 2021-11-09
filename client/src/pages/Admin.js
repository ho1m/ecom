import axios from 'axios';
import React, { useState } from 'react'

export default function Admin() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [imageUrl, setImageUrl] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://localhost:44310/api/Products', {
            title,
            description,
            price,
            image: imageUrl
        }).then(() => {
            alert("created");
            e.target.reset();
        }).catch(err => alert(err.message))
    };

    return (
        <div className="container py-5 admin">
            <h2 className="fs-3 text-center">Create product</h2>
            <form className="mx-auto" onSubmit={handleSubmit}>
                <div className="form-group mb-2">
                    <label htmlFor="productTitle">Title*</label>
                    <input type="text" className="form-control" id="productTitle" placeholder="Enter product name" required value={title} onChange={({ target }) => setTitle(target.value)} />
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="productDescription">Description*</label>
                    <textarea className="form-control" id="productDescription" rows="3" required value={description} onChange={({ target }) => setDescription(target.value)} ></textarea>
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="productPrice">Price*</label>
                    <input type="number" min="1" step="any" className="form-control" id="productPrice" placeholder="Price ex. 10.99" required value={price} onChange={({ target }) => setPrice(target.value)} />
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="productImage">Image Url*</label>
                    <input type="text" className="form-control" id="productImage" placeholder="Image url" required value={imageUrl} onChange={({ target }) => setImageUrl(target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Create</button>
            </form>
        </div>
    )
}
