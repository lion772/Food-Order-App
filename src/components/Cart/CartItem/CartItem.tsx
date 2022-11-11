import React, { FC, MouseEventHandler } from "react";
import styles from "./CartItem.module.css";

interface CartItemProps {
    item: { id: string; name: string; amount: number; price: number };
    onAdd: MouseEventHandler;
    onRemove: MouseEventHandler;
}

const CartItem: FC<CartItemProps> = ({ item, onAdd, onRemove }) => {
    const price = `$${item.price.toFixed(2)}`;

    return (
        <li className={styles["cart-item"]}>
            <div>
                <h2>{item.name}</h2>
                <div className={styles.summary}>
                    <span className={styles.price}>{price}</span>
                    <span className={styles.amount}>x {item.amount}</span>
                </div>
            </div>
            <div className={styles.actions}>
                <button className={styles.onRemove} onClick={onRemove}>
                    −
                </button>
                <button className={styles.onAdd} onClick={onAdd}>
                    +
                </button>
            </div>
        </li>
    );
};

export default CartItem;
