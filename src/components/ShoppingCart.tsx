import React, { useState,useContext } from "react";
import styles from "./ShoppingCart.module.css";
import { FiShoppingCart } from 'react-icons/fi';
import {appContext} from '../AppProvide';

const ShoppingCart: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {shoppingCart} = useContext(appContext);
    return (
        <div className={styles.cartContainer}>
            <FiShoppingCart />
            <button
                className={styles.button}
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
            >
                购物车 {shoppingCart.items.length} (件)
            </button>
            <div
                className={styles.cartDropDown}
                style={{
                    display: isOpen ? "block" : "none",
                }}
            >
                <ul>
                    {
                        shoppingCart.items.map(item=><li key={item.id}>{item.name}</li>)
                    }
                </ul>
            </div>
        </div>
    );
}

export default ShoppingCart;
