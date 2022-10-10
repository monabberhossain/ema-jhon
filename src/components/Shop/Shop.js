import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { addToLS, getCartStatus } from "../../utilities/manageCart";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
    const [cart, setCart] = useState([]);

    const products = useLoaderData();

    useEffect(() => {
        const cartStatus = getCartStatus();
        const savedCart = [];
        for (const id in cartStatus) {
            const addedProduct = products.find((product) => product.id === id);
            if (addedProduct) {
                const quantity = cartStatus[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products]);

    const addToCartHandler = (selectedProduct) => {
        let newCart = [];
        const exists = cart.find(
            (product) => product.id === selectedProduct.id
        );
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        } else {
            const rest = cart.filter(
                (product) => product.id !== selectedProduct.id
            );
            exists.quantity += 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToLS(selectedProduct.id);
    };

    return (
        <div className="shop-container">
            <div className="product-container">
                {products.map((product) => (
                    <Product
                        key={product.id}
                        product={product}
                        addToCartHandler={addToCartHandler}
                    ></Product>
                ))}
            </div>
            <div className="order-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;
