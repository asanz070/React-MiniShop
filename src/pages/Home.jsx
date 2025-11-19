// ECHO is on.
import React, { useEffect } from 'react'
import { useState } from 'react'
import ProductCard from '../components/ProductCard';

const Home = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        // API call
        const fetchProduct = async () => {
            const response = await fetch('https://api.escuelajs.co/api/v1/products')

            const data = await response.json();
            setProducts(data);
        }
        fetchProduct();
    }, [])

    const handleAddToCart = (product) => {
        console.log('Adding to cart:', product.title)
    }

    return (
        <>
            <div className='container'>
                <h2>Our Products</h2>
                <div className='products-grid'>
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onAddToCart={handleAddToCart}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Home
