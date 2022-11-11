import React, { FC, MouseEventHandler, useContext } from "react";
import { CartContext } from "../../store/Cart-Context/CartContext";
import Modal from "../UI/Modal/Modal";
import styles from "./Cart.module.css";

interface CartProps {
    onHideCart: MouseEventHandler;
}

const Cart: FC<CartProps> = ({ onHideCart }) => {
    const cartContext = useContext(CartContext);
    const cartitems = (
        <ul className={styles["cart-items"]}>
            {cartContext.items.map((cartitem) => {
                return (
                    <li>
                        {cartitem["amount"]}x {cartitem["name"]}
                    </li>
                );
            })}
        </ul>
    );
    const carItemTotalAmount = cartContext.totalAmount.toFixed(2);
    const hasItems = cartContext.items.length > 0;

    return (
        <Modal onClose={onHideCart}>
            {cartitems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>${carItemTotalAmount}</span>
            </div>
            <div className={styles.actions}>
                <button className={styles["button--alt"]} onClick={onHideCart}>
                    Close
                </button>
                {hasItems && <button className={styles.button}>Order</button>}
            </div>
        </Modal>
    );
};

export default Cart;
