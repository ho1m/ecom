import React, { useState } from 'react'

export default function Admin() {
    const [title, setTitle] = useState("");
    const [descritpion, setDescritpion] = useState("");
    const [price, setPrice] = useState(0.00);
    const [imageUrl, setImageUrl] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="container py-5 admin">
            <h2 className="fs-3 text-center">Create product</h2>
            <form className="mx-auto" onSubmit={handleSubmit}>
                <div class="form-group mb-2">
                    <label for="productTitle">Title*</label>
                    <input type="text" class="form-control" id="productTitle" placeholder="Enter product name" required />
                </div>
                <div class="form-group mb-2">
                    <label for="productDescription">Description*</label>
                    <textarea class="form-control" id="productDescription" rows="3" required ></textarea>
                </div>
                <div class="form-group mb-2">
                    <label for="productPrice">Price*</label>
                    <input type="number" min="1" step="any" class="form-control" id="productPrice" placeholder="Price ex. 10.99" required />
                </div>
                <div class="form-group mb-2">
                    <label for="productImage">Image Url*</label>
                    <input type="text" class="form-control" id="productImage" placeholder="Image url" required />
                </div>
                <button type="submit" class="btn btn-primary">Create</button>
            </form>
        </div>
    )
}
