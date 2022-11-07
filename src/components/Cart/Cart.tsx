import React, { FC, MouseEventHandler } from "react";
import Modal from "../UI/Modal/Modal";
import styles from "./Cart.module.css";

interface CartProps {
    onHideCart: MouseEventHandler;
}

const Cart: FC<CartProps> = ({ onHideCart }) => {
    const cartitems = (
        <ul className={styles["cart-items"]}>
            {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map(
                (cartitem) => (
                    <li>{cartitem.name}</li>
                )
            )}
        </ul>
    );
    return (
        <Modal onClose={onHideCart}>
            {cartitems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>$35.62</span>
            </div>
            <div className={styles.actions}>
                <button className={styles["button--alt"]} onClick={onHideCart}>
                    Close
                </button>
                <button className={styles.button}>Order</button>
            </div>
        </Modal>
    );
};

export default Cart;
