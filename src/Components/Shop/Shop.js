import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import './Shop.css';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useState([]);

    const handleAddToCart = (selectedProduct) => {
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct]
        } else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity += 1;
            newCart = [...rest, exists]
        }
        setCart(newCart);
        addToDb(selectedProduct.id)
    };

    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        if (storedCart) {
            for (const id in storedCart) {
                const addedProduct = products.find(pd => pd.id == id)
                if (addedProduct) {
                    const quantity = storedCart[id];
                    addedProduct.quantity = quantity;
                    savedCart.push(addedProduct);
                }
            }
        }
        setCart(savedCart);
    }, [products])

    return (
        <div className="shop-container">
            <div className="products-container">
                {
                    products.map(product => <Products
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Products>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/orders"><button>Review Order</button></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;