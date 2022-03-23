import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    };
    console.log(cart);

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    return (
        <div className="shop-container">
            <div className="products-container">
                {
                    products.map(product => <Products 
                        key={product.id}
                        product = {product}
                        handleAddToCart = {handleAddToCart}
                        ></Products>)
                }
            </div>
            <div className="cart-container">
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;