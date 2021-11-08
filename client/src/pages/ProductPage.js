import React, { useEffect, useState } from 'react';
import {ClipLoader} from "react-spinners";
import { useNavigate, useParams } from 'react-router-dom';

export default function ProductPage() {
    const { productId } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        if (productId != 1) navigate('/404');
        setProduct(
            {"id":1,
            "title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            "price":109.95,
            "description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            "image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            })
        setLoading(false);
    }, [])

    if (loading) return <div className="flex-fill d-flex align-items-center justify-content-center">
        <ClipLoader color="#111" loading={loading} size={100} />
    </div>;

    return (
        <div className="flex-fill py-3 container text-center">
            <h2 className="fs-3">{product.title}</h2>
            <div className="d-flex flex-wrap">
                <img src={product.image} alt="" className="productpage-img mx-auto my-3" />
                <div className="">
                    <p className="card-text fs-4">{product.description}</p>
                    <p className="card-text">${product.price}</p>
                    <button className="btn btn-primary">Add to cart</button>
                </div>
            </div>
        </div>
    )
}
