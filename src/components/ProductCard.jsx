// ECHO is on.
import React from 'react'

const ProductCard = ({ product, onAddToCart }) => {
    return (
        <>
            <div className="product-card">
                <div className="product-image">
                    <img
                        src={product.images[0]}
                        alt={product.title}
                    />
                </div>
                <div className="product-info">
                    <h3 className="product-title">{product.title}</h3>
                    <p className="product-price">${product.price}</p>
                    <button
                        className="add-to-cart-btn"
                        onClick={() => onAddToCart(product)}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </>
    )
}

export default ProductCard
