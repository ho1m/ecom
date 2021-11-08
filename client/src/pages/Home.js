import React from 'react'
import ProductsList from '../components/ProductsList';

export default function Home() {
    return (
        <div className="container">
            <div className="shadow rounded p-5 my-5 text-center">
                <h1 class="fs-1">Welcome to eCom!</h1>
                <hr />
                <small>ECOMMERCE STORE</small>
            </div>
            <ProductsList />
        </div>
    )
}
