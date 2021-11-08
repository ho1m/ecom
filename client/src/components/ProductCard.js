import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function ProductCard({ data: { id, image, title, price, description } }) {
    const navigate = useNavigate();

    return (
        <div className="col cardEffect">
            <div className="card cardEffect overflow-hidden" onClick={() => navigate(`/product/${id}`)}>
                <img src={image} className="card-img-top my-3 card-img" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p>${price}</p>
                    <p className="card-text">{description.substring(0, 150)}...</p>
                </div>
            </div>
        </div>
    )
}
