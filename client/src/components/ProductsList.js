import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';

export default function ProductsList() {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://localhost:44310/api/Products')
            .then(({ data }) => {
                setProducts(data);
                setLoading(false);
            })
            .catch(err => alert(err))
    }, [])

    return (
        <div className="my-5">
            <h2 className="fs-2 mb-3">Products </h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {products.length > 0 && products.map(product => <ProductCard key={product.id} data={product} />) }
            </div>
        </div>
    )
}
