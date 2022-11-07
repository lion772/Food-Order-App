import React, { FC } from "react";
import Modal from "../UI/Modal/Modal";
import styles from "./Cart.module.css";

interface CartProps {}

const Cart: FC<CartProps> = () => {
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
        <Modal>
            {cartitems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={styles.actions}>
                <button className={styles["button--alt"]}>Close</button>
                <button className={styles.button}>Order</button>
            </div>
        </Modal>
    );
};

export default Cart;
