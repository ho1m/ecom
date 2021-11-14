import React, { useEffect, useState } from 'react';
import {ClipLoader} from "react-spinners";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function ProductPage() {
    const { productId } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`https://localhost:44310/api/Products/${productId}`)
        .then(({ data }) => {
            setProduct(data);
            setLoading(false);
        })
        .catch(err => navigate('/404'))
    }, [])

    if (loading) return <div className="flex-fill d-flex align-items-center justify-content-center">
        <ClipLoader color="#111" loading={loading} size={100} />
    </div>;

    return (
        <div className="container py-3 text-center flex-fill">
            <h2 className="fs-3">{product.title}</h2>
            <div className="d-flex flex-column">
                <img src={product.image} alt="" className="mx-auto my-3 productpage-img" />
                <div className="">
                    <p className="card-text fs-4">{product.description}</p>
                    <p className="card-text">${product.price}</p>
                    <button className="btn btn-primary">Add to cart</button>
                </div>
            </div>
        </div>
    )
}
